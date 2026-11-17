// 장난감 특공대 2 — 경쟁전(병렬 경쟁) 중계 서버
// Cloudflare Workers + Durable Objects (SQLite 기반, WebSocket Hibernation API)
// 인증 없음: 클라이언트가 만든 pid(UUID) + 닉네임으로 식별 (사내 캐주얼 용도)
import { DurableObject } from 'cloudflare:workers';

const PROTO = 1;
const CODE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // I L O 0 1 제외
const MAX_PLAYERS = 8;
const MATCH_LEN = 600;          // 초
const DEADLINE_EXTRA = 120;     // 초 (모달 시간 등 여유)
const GRACE_MS = 30000;         // 연결 끊김 유예
const COUNTDOWN_MS = 5000;
const SCORE_CAP = 1500;         // 초당 최대 점수 증가
const SURVIVE_PT = 1;           // 생존 1초당 점수 (클라이언트 SCORE.perSec 와 동일)
const BOARD_MS = 900;           // 점수판 브로드캐스트 간격
const SAVE_MS = 15000;          // 경기 중 상태 저장 간격
const HEROES = ['raccoon', 'bear', 'dachs', 'duck', 'tiger'];
const THEME_N = 8;
const EV_KINDS = ['elite', 'midboss', 'boss', 'dead', 'clear'];

// ---------------- 공통 유틸 ----------------
const num = (v, d = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : d);
const int = (v, a, b, d = a) => Math.max(a, Math.min(b, Math.floor(num(v, d))));
function sanitizeName(s) {
  s = String(s || '').normalize('NFC').replace(/[\u0000-\u001f\u007f<>&"'`\\]/g, '').replace(/\s+/g, ' ').trim();
  s = Array.from(s).slice(0, 10).join('');
  return s || '대원' + Math.floor(Math.random() * 900 + 100);
}
const validPid = (p) => typeof p === 'string' && /^[A-Za-z0-9-]{8,64}$/.test(p);
const seasonOf = (t = Date.now()) => new Date(t).toISOString().slice(0, 7);

function originAllowed(origin, env) {
  if (!origin) return true; // 브라우저가 아닌 요청(curl 등)
  const list = String(env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  return list.some(a => origin === a || (a !== 'null' && origin.startsWith(a + ':')));
}
function corsHeaders(origin, ok) {
  const h = { 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400', Vary: 'Origin' };
  if (origin && ok) h['Access-Control-Allow-Origin'] = origin;
  return h;
}
const json = (obj, status = 200, extra = {}) => new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...extra } });

// ---------------- Worker 진입점 ----------------
export default {
  async fetch(req, env) {
    const url = new URL(req.url), origin = req.headers.get('Origin'), ok = originAllowed(origin, env), cors = corsHeaders(origin, ok);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (!ok) return json({ ok: false, error: 'origin_not_allowed', origin }, 403, cors);
    const path = url.pathname.replace(/\/+$/, '') || '/';
    try {
      if (path === '/health' || path === '/') return json({ ok: true, proto: PROTO, dev: env.DEV === '1', season: seasonOf() }, 200, cors);
      if (path === '/season') {
        let s = url.searchParams.get('s') || seasonOf(); if (!/^\d{4}-\d{2}$/.test(s)) s = seasonOf();
        const pid = url.searchParams.get('pid') || '';
        const stub = env.LEAGUE.get(env.LEAGUE.idFromName('season'));
        const r = await stub.fetch(`https://league/season?s=${s}&pid=${encodeURIComponent(validPid(pid) ? pid : '')}`);
        return json(await r.json(), 200, cors);
      }
      if (path === '/room/new') {
        for (let i = 0; i < 6; i++) {
          let code = ''; const rnd = crypto.getRandomValues(new Uint8Array(4));
          for (const b of rnd) code += CODE_CHARS[b % CODE_CHARS.length];
          const info = await (await env.ROOM.get(env.ROOM.idFromName(code)).fetch('https://room/info')).json();
          if (!info.players) return json({ ok: true, code }, 200, cors);
        }
        return json({ ok: false, error: 'no_code' }, 503, cors);
      }
      const m = path.match(/^\/room\/([A-Za-z0-9]{4})$/);
      if (m) {
        const code = m[1].toUpperCase();
        if (![...code].every(c => CODE_CHARS.includes(c))) return json({ ok: false, error: 'bad_code' }, 400, cors);
        if ((req.headers.get('Upgrade') || '').toLowerCase() !== 'websocket') return json({ ok: false, error: 'websocket_required' }, 426, cors);
        const fwd = new Request(`https://room/ws?code=${code}&${url.searchParams.toString()}`, req);
        return env.ROOM.get(env.ROOM.idFromName(code)).fetch(fwd);
      }
      return json({ ok: false, error: 'not_found' }, 404, cors);
    } catch (e) {
      return json({ ok: false, error: 'server_error', msg: String(e && e.message || e) }, 500, cors);
    }
  },
};

// ---------------- Room: 방 하나 (코드당 1개) ----------------
export class Room extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.s = null; this.lastBoard = 0; this.lastSave = 0;
    // ping 은 DO를 깨우지 않고 자동 응답 (과금 없음)
    ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair('{"t":"ping"}', '{"t":"pong"}'));
    ctx.blockConcurrencyWhile(async () => { this.s = (await ctx.storage.get('room')) || null; });
  }
  get dev() { return this.env.DEV === '1'; }
  fresh(code) { return { v: 1, code, phase: 'lobby', host: null, theme: 0, seed: 0, startAt: 0, len: MATCH_LEN, match: 0, players: {}, last: null }; }
  plist() { return Object.values(this.s.players).sort((a, b) => a.j - b.j); }
  sockets(pid) { return this.ctx.getWebSockets(pid); }
  isConn(pid, except) { return this.sockets(pid).some(w => w !== except && w.readyState === 1); }

  async save(force) {
    if (!this.s) return;
    const now = Date.now();
    if (!force && now - this.lastSave < SAVE_MS) return;
    this.lastSave = now; await this.ctx.storage.put('room', this.s);
  }
  send(ws, obj) { try { ws.send(JSON.stringify(obj)); } catch (e) { /* 닫힌 소켓 */ } }
  broadcast(obj, exceptPid) {
    const msg = JSON.stringify(obj);
    for (const ws of this.ctx.getWebSockets()) {
      const a = ws.deserializeAttachment(); if (exceptPid && a && a.pid === exceptPid) continue;
      try { ws.send(msg); } catch (e) { /* 무시 */ }
    }
  }
  roomView() {
    const s = this.s;
    return { code: s.code, phase: s.phase, host: s.host, theme: s.theme, seed: s.seed, startAt: s.startAt, len: s.len, match: s.match, dev: this.dev, max: MAX_PLAYERS,
      players: this.plist().map(p => ({ pid: p.pid, name: p.name, hero: p.hero, ready: p.ready, conn: this.isConn(p.pid) })) };
  }
  boardView() {
    const now = Date.now();
    return { t: 'board', now, phase: this.s.phase, match: this.s.match,
      p: this.plist().map(p => { const c = this.isConn(p.pid); return { pid: p.pid, name: p.name, hero: p.hero, score: p.score, lv: p.lv, alive: p.alive, gt: Math.round(p.gt * 10) / 10, conn: c, fin: p.fin, gone: !c && p.discAt > 0 && now - p.discAt >= GRACE_MS }; }) };
  }
  sendRoom() { this.broadcast({ t: 'room', now: Date.now(), room: this.roomView() }); }
  sendBoard() { this.lastBoard = Date.now(); this.broadcast(this.boardView()); }
  resetStats(p) { Object.assign(p, { score: 0, lv: 1, kills: 0, alive: true, gt: 0, hp: 100, seq: -1, fin: false, cleared: false, deadGt: 0, flags: 0, evN: 0 }); }

  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === '/info') return json({ players: this.s ? Object.keys(this.s.players).length : 0, phase: this.s ? this.s.phase : 'none' });
    if (url.pathname !== '/ws') return json({ error: 'not_found' }, 404);
    const code = url.searchParams.get('code'), pid = url.searchParams.get('pid'), ver = +url.searchParams.get('ver');
    const pair = new WebSocketPair(), [client, server] = Object.values(pair);
    // 거절도 소켓을 연 뒤 메시지로 알림 (브라우저는 HTTP 오류 코드를 읽을 수 없음)
    const reject = (code4, err, msg) => { this.ctx.acceptWebSocket(server, ['_rej']); server.serializeAttachment({ pid: null }); this.send(server, { t: 'err', code: err, msg }); server.close(code4, err); return new Response(null, { status: 101, webSocket: client }); };
    if (ver !== PROTO) return reject(4001, 'version', `게임 버전이 서버와 다릅니다 (서버 v${PROTO}). 페이지를 새로고침하세요.`);
    if (!validPid(pid)) return reject(4004, 'bad_pid', '잘못된 접속 정보입니다.');
    if (!this.s) this.s = this.fresh(code);
    const s = this.s, now = Date.now();
    let p = s.players[pid];
    if (!p) {
      if (s.phase !== 'lobby') return reject(4003, 'started', '이미 경기가 시작된 방입니다. 경기가 끝난 뒤 다시 참가하세요.');
      if (Object.keys(s.players).length >= MAX_PLAYERS) return reject(4002, 'full', `방이 가득 찼습니다 (최대 ${MAX_PLAYERS}명).`);
      p = s.players[pid] = { pid, name: '', hero: 'raccoon', ready: false, j: now, discAt: 0 }; this.resetStats(p);
    }
    p.name = sanitizeName(url.searchParams.get('name'));
    p.discAt = 0;
    // 같은 pid의 이전 연결은 교체
    for (const old of this.sockets(pid)) { old.serializeAttachment({ pid: null }); try { old.close(4009, 'replaced'); } catch (e) { /* 무시 */ } }
    this.ctx.acceptWebSocket(server, [pid]); server.serializeAttachment({ pid });
    if (!s.host || !s.players[s.host]) s.host = pid;
    await this.save(true);
    this.send(server, { t: 'welcome', v: PROTO, now, pid, room: this.roomView(), last: s.last });
    if (s.phase === 'lobby') this.sendRoom(); else this.sendBoard();
    return new Response(null, { status: 101, webSocket: client });
  }

  async webSocketMessage(ws, raw) {
    const a = ws.deserializeAttachment(); if (!a || !a.pid || !this.s) return;
    if (typeof raw !== 'string' || raw.length > 2048) return;
    let m; try { m = JSON.parse(raw); } catch (e) { return; }
    if (!m || typeof m.t !== 'string') return;
    const s = this.s, p = s.players[a.pid]; if (!p) return;
    const now = Date.now(), isHost = s.host === p.pid;
    switch (m.t) {
      case 'hero': if (s.phase === 'lobby' && HEROES.includes(m.hero)) { p.hero = m.hero; await this.save(true); this.sendRoom(); } break;
      case 'ready': if (s.phase === 'lobby') { p.ready = !!m.on; await this.save(true); this.sendRoom(); } break;
      case 'name': if (s.phase === 'lobby') { p.name = sanitizeName(m.name); await this.save(true); this.sendRoom(); } break;
      case 'theme': if (s.phase === 'lobby' && isHost) { s.theme = int(m.theme, 0, THEME_N - 1); await this.save(true); this.sendRoom(); } break;
      case 'start': {
        if (s.phase !== 'lobby' || !isHost) return;
        const ps = this.plist().filter(q => this.isConn(q.pid));
        if (ps.length < 2 && !this.dev) return this.send(ws, { t: 'err', code: 'need2', msg: '2명 이상 모여야 시작할 수 있습니다.' });
        if (ps.some(q => q.pid !== p.pid && !q.ready)) return this.send(ws, { t: 'err', code: 'notready', msg: '모든 대원이 준비해야 시작할 수 있습니다.' });
        for (const q of this.plist()) if (!this.isConn(q.pid)) delete s.players[q.pid];
        p.ready = true;
        s.seed = crypto.getRandomValues(new Uint32Array(1))[0];
        s.startAt = now + COUNTDOWN_MS; s.match++;
        s.len = this.dev && m.len ? int(m.len, 10, MATCH_LEN) : MATCH_LEN;
        for (const q of this.plist()) { this.resetStats(q); q.discAt = 0; }
        s.phase = 'countdown';
        await this.save(true);
        this.broadcast({ t: 'start', now, seed: s.seed, startAt: s.startAt, theme: s.theme, len: s.len, match: s.match, dev: this.dev, room: this.roomView() });
        await this.schedule();
        break;
      }
      case 's': case 'fin': {
        if (s.phase === 'countdown' && now >= s.startAt - 1000) s.phase = 'playing';
        if (s.phase !== 'playing' || p.fin) return;
        const seq = int(m.seq, -1, 1e9, -1); if (m.t === 's' && seq <= p.seq) return; if (seq > p.seq) p.seq = seq;
        const gt = Math.min(num(m.gt, p.gt), s.len + 5);
        if (gt < p.gt) { p.flags++; return; }
        const wall = (now - s.startAt) / 1000;
        if (!this.dev && gt > wall + 10) { p.flags++; return; }
        const dw = p.wt ? (now - p.wt) / 1000 : 1; p.wt = now; // 실제 경과 시간도 상한에 반영 (시작 직후 몰아넣기 방지)
        const allowed = p.score + SCORE_CAP * Math.max(1, this.dev ? gt - p.gt : Math.min(gt - p.gt, dw + 2));
        let score = Math.floor(num(m.score, p.score));
        if (score > allowed) { p.flags++; score = Math.floor(allowed); }
        if (score >= p.score) p.score = score;
        p.gt = gt; p.lv = int(m.lv, 1, 999, p.lv); p.kills = int(m.kills, 0, 1e7, p.kills); p.hp = int(m.hp, 0, 1e6, p.hp);
        const alive = m.alive !== false;
        if (!alive && p.alive) p.deadGt = gt;
        p.alive = alive;
        if (m.t === 'fin') { p.fin = true; p.cleared = !!m.cleared && alive; this.sendBoard(); await this.save(true); await this.checkEnd(); }
        else { if (now - this.lastBoard >= BOARD_MS) this.sendBoard(); await this.save(false); }
        break;
      }
      case 'giveup': // 새로고침 등으로 로컬 경기를 잃은 경우: 마지막 점수로 종료
        if ((s.phase === 'playing' || s.phase === 'countdown') && !p.fin) { p.fin = true; if (p.alive) { p.alive = false; p.deadGt = p.gt; } this.sendBoard(); await this.checkEnd(); }
        break;
      case 'ev':
        if (s.phase !== 'playing' || !EV_KINDS.includes(m.kind) || ++p.evN > 60) return;
        this.broadcast({ t: 'ev', pid: p.pid, name: p.name, hero: p.hero, kind: m.kind, gt: Math.round(num(m.gt)) }, p.pid);
        break;
      case 'leave': ws.serializeAttachment({ pid: null }); try { ws.close(1000, 'leave'); } catch (e) { /* 무시 */ } await this.dropPlayer(p.pid, true); break;
    }
  }
  async webSocketClose(ws, code, reason) {
    try { ws.close(code === 1005 || code === 1006 || !code ? 1000 : code, 'bye'); } catch (e) { /* 이미 닫힘 */ } // 닫기 핸드셰이크 완료
    await this.onGone(ws);
  }
  async webSocketError(ws) { await this.onGone(ws); }
  async onGone(ws) {
    const a = ws.deserializeAttachment(); if (!a || !a.pid || !this.s) return;
    ws.serializeAttachment({ pid: null });
    if (this.isConn(a.pid, ws)) return; // 교체된 연결 (새 연결이 살아 있음)
    await this.dropPlayer(a.pid, false);
  }
  async dropPlayer(pid, left) {
    const s = this.s, p = s && s.players[pid]; if (!p) return;
    if (s.phase === 'lobby') {
      delete s.players[pid];
      if (s.host === pid) { const n = this.plist().find(q => this.isConn(q.pid)) || this.plist()[0]; s.host = n ? n.pid : null; }
      if (!Object.keys(s.players).length) { await this.cleanup(); return; }
      await this.save(true); this.sendRoom();
    } else {
      p.discAt = Date.now() - (left ? GRACE_MS : 0); // 직접 나가면 유예 없이
      if (left && !p.fin) { p.fin = true; if (p.alive) { p.alive = false; p.deadGt = p.gt; } }
      if (s.host === pid) { const n = this.plist().find(q => q.pid !== pid && this.isConn(q.pid)); if (n) s.host = n.pid; }
      await this.save(true); this.sendBoard(); await this.checkEnd(); await this.schedule();
    }
  }
  async cleanup() { this.s = null; await this.ctx.storage.deleteAlarm(); await this.ctx.storage.deleteAll(); }

  async schedule() {
    const s = this.s; if (!s || s.phase === 'lobby') { await this.ctx.storage.deleteAlarm(); return; }
    let t = s.startAt + (s.len + DEADLINE_EXTRA) * 1000;
    if (s.phase === 'countdown') t = Math.min(t, s.startAt);
    for (const p of this.plist()) if (!p.fin && p.discAt > 0 && !this.isConn(p.pid)) t = Math.min(t, p.discAt + GRACE_MS + 50);
    await this.ctx.storage.setAlarm(Math.max(t, Date.now() + 50));
  }
  async alarm() {
    const s = this.s; if (!s) return;
    const now = Date.now();
    if (s.phase === 'countdown' && now >= s.startAt) { s.phase = 'playing'; await this.save(true); }
    if (s.phase === 'playing') { this.sendBoard(); await this.checkEnd(); }
    if (this.s && (this.s.phase === 'countdown' || this.s.phase === 'playing')) await this.schedule();
  }
  async checkEnd() {
    const s = this.s; if (!s || s.phase !== 'playing') return;
    const now = Date.now(), deadline = s.startAt + (s.len + DEADLINE_EXTRA) * 1000;
    const gone = (p) => p.fin || (!this.isConn(p.pid) && p.discAt > 0 && now - p.discAt >= GRACE_MS);
    const all = this.plist(), left = all.filter(p => !gone(p));
    const done = left.length === 0;
    // 최후 1인: 2명 이상 경기에서 나머지가 모두 쓰러지거나 포기·이탈하면 자동 종료
    // 생존자는 남은 시간만큼 생존 점수(1점/초)를 정산받음
    const last = !done && all.length >= 2 && left.length === 1 && left[0].alive;
    if (last) { const w = left[0]; w.lastBonus = Math.max(0, Math.round(s.len - w.gt)) * SURVIVE_PT; w.score += w.lastBonus; w.lastStand = true; }
    if (done || last || now >= deadline) await this.endMatch(last ? 'last' : now >= deadline && !done ? 'deadline' : 'done');
  }
  async endMatch(reason) {
    const s = this.s; s.phase = 'ended';
    const st = (p) => (p.cleared ? 2 : p.alive ? 1 : 0);
    const ps = this.plist().sort((a, b) => b.score - a.score || st(b) - st(a) || (b.alive ? 1e9 : b.deadGt) - (a.alive ? 1e9 : a.deadGt) || a.j - b.j);
    const ranking = ps.map((p, i) => ({ rank: i + 1, pid: p.pid, name: p.name, hero: p.hero, score: p.score, lv: p.lv, kills: p.kills, alive: p.alive, cleared: p.cleared, gt: Math.round(p.gt), conn: this.isConn(p.pid), lastStand: !!p.lastStand, lastBonus: p.lastBonus || 0 }));
    const season = seasonOf(); let recorded = false, stats = {};
    if (ranking.length >= 2 || this.dev) {
      try {
        const r = await this.env.LEAGUE.get(this.env.LEAGUE.idFromName('season')).fetch('https://league/record', { method: 'POST', body: JSON.stringify({ season, n: ranking.length, results: ranking.map(r => ({ pid: r.pid, name: r.name, rank: r.rank, score: r.score })) }) });
        const j = await r.json(); stats = j.stats || {}; recorded = !!j.ok;
      } catch (e) { /* 기록 실패해도 결과는 보냄 */ }
    }
    for (const r of ranking) r.season = stats[r.pid] || null;
    const end = { t: 'end', now: Date.now(), match: s.match, reason, season, recorded, n: ranking.length, ranking };
    s.last = end;
    this.broadcast(end);
    // 재대결을 위해 대기실로 복귀 (끊긴 대원 정리)
    s.phase = 'lobby'; s.seed = 0; s.startAt = 0;
    for (const p of this.plist()) { p.ready = false; if (!this.isConn(p.pid)) delete s.players[p.pid]; }
    if (!Object.keys(s.players).length) { await this.cleanup(); return; }
    if (!s.players[s.host]) s.host = this.plist()[0].pid;
    await this.save(true); await this.ctx.storage.deleteAlarm(); this.sendRoom();
  }
}

// ---------------- League: 시즌 기록 (단일 인스턴스 "season") ----------------
export class League extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.sql = ctx.storage.sql;
    this.sql.exec(`CREATE TABLE IF NOT EXISTS stats (
      season TEXT NOT NULL, pid TEXT NOT NULL, name TEXT NOT NULL,
      matches INTEGER NOT NULL DEFAULT 0, wins INTEGER NOT NULL DEFAULT 0, best INTEGER NOT NULL DEFAULT 0,
      rank_sum INTEGER NOT NULL DEFAULT 0, updated INTEGER NOT NULL DEFAULT 0,
      PRIMARY KEY (season, pid))`);
  }
  row(r) {
    const m = r.matches || 0;
    return { pid: r.pid, name: r.name, matches: m, wins: r.wins, winRate: m ? Math.round(r.wins / m * 1000) / 10 : 0, best: r.best, avgRank: m ? Math.round(r.rank_sum / m * 100) / 100 : 0, placed: m >= 10 };
  }
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === '/record' && req.method === 'POST') {
      const b = await req.json(); const season = /^\d{4}-\d{2}$/.test(b.season) ? b.season : seasonOf(), now = Date.now(), stats = {};
      for (const r of (b.results || []).slice(0, MAX_PLAYERS)) {
        if (!validPid(r.pid)) continue;
        const rank = int(r.rank, 1, MAX_PLAYERS), score = int(r.score, 0, 1e9);
        this.sql.exec(`INSERT INTO stats (season, pid, name, matches, wins, best, rank_sum, updated) VALUES (?, ?, ?, 1, ?, ?, ?, ?)
          ON CONFLICT(season, pid) DO UPDATE SET name = excluded.name, matches = matches + 1, wins = wins + excluded.wins,
          best = MAX(best, excluded.best), rank_sum = rank_sum + excluded.rank_sum, updated = excluded.updated`,
          season, r.pid, sanitizeName(r.name), rank === 1 ? 1 : 0, score, rank, now);
        const row = this.sql.exec('SELECT * FROM stats WHERE season = ? AND pid = ?', season, r.pid).toArray()[0];
        if (row) stats[r.pid] = this.row(row);
      }
      return json({ ok: true, season, stats });
    }
    if (url.pathname === '/season') {
      const season = url.searchParams.get('s') || seasonOf(), pid = url.searchParams.get('pid') || '';
      const rows = this.sql.exec('SELECT * FROM stats WHERE season = ? ORDER BY updated DESC LIMIT 500', season).toArray().map(r => this.row(r));
      // 순위: 10경기 이상만 — 승리 수 → 승률 → 평균 순위 → 최고 점수
      const ranked = rows.filter(r => r.placed).sort((a, b) => b.wins - a.wins || b.winRate - a.winRate || a.avgRank - b.avgRank || b.best - a.best);
      ranked.forEach((r, i) => { r.rank = i + 1; });
      const placing = rows.filter(r => !r.placed).sort((a, b) => b.matches - a.matches || b.wins - a.wins);
      let me = rows.find(r => r.pid === pid) || null;
      if (!me && validPid(pid)) { const row = this.sql.exec('SELECT * FROM stats WHERE season = ? AND pid = ?', season, pid).toArray()[0]; if (row) me = this.row(row); }
      return json({ ok: true, season, minMatches: 10, ranked: ranked.slice(0, 100), placing: placing.slice(0, 100), me, total: rows.length });
    }
    return json({ error: 'not_found' }, 404);
  }
}
