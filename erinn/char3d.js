// 에린 견습생 육성기 — 3D 캐릭터 (three.js, 런타임 절차 생성)
// tama3d_gen7.py 의 Char.b / eyes / cheeks / weapon / headgear / human 을 그대로 옮긴 것.
// 좌표는 Blender 와 같은 Z-up, 정면 -Y 로 계산한 뒤 정점 단계에서 Y-up(정면 +Z)으로 바꿔 굽는다.
import * as THREE from './vendor/three.module.min.js';
import { RoundedBoxGeometry } from './vendor/RoundedBoxGeometry.js';

const K = '#1a1a1a', W = '#ffffff';
const METAL = '#95a5a6', WOOD = '#8b5a2b', GOLD = '#f1c40f', STEEL = '#dfe6ee';
const DEG = Math.PI / 180;

// ---------------------------------------------------------------- 둥근 박스 템플릿 캐시
const tplCache = new Map();
function template(sx, sy, sz, w) {
  const key = sx.toFixed(4) + ',' + sy.toFixed(4) + ',' + sz.toFixed(4) + ',' + w.toFixed(4);
  let t = tplCache.get(key);
  if (!t) {
    let g = w > 0.002 ? new RoundedBoxGeometry(sx, sy, sz, 2, w) : new THREE.BoxGeometry(sx, sy, sz);
    if (g.index) { const n = g.toNonIndexed(); g.dispose(); g = n; }
    t = { p: g.attributes.position.array.slice(), n: g.attributes.normal.array.slice() };
    g.dispose(); tplCache.set(key, t);
  }
  return t;
}
const colCache = new Map();
function lin(hex) { let c = colCache.get(hex); if (!c) { const k = new THREE.Color(hex); c = [k.r, k.g, k.b]; colCache.set(hex, c); } return c; }

// ---------------------------------------------------------------- Char (Python 의 Char 클래스)
class Char {
  constructor(scale = 1) { this.s = scale; this.lit = { p: [], n: [], c: [] }; this.glow = { p: [], n: [], c: [] }; this.count = 0; }
  // size, loc: [x,y,z] / o: { bevel, taper:[tx,ty], rot:[x,y,z] 도, emit }
  b(name, size, loc, color, o = {}) {
    const bevel = o.bevel ?? 0.28, taper = o.taper || [1, 1], rot = o.rot || [0, 0, 0], emit = o.emit || 0;
    const [sx, sy, sz] = size, [tx, ty] = taper;
    const w = Math.min(sx * Math.min(1, tx), sy * Math.min(1, ty), sz) * bevel;
    const t = template(sx, sy, sz, w), P = t.p, N = t.n;
    // Blender 'XYZ' 오일러 = three.js order 'ZYX' (행렬 Rz·Ry·Rx)
    const m = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rot[0] * DEG, rot[1] * DEG, rot[2] * DEG, 'ZYX')).elements;
    const out = emit ? this.glow : this.lit, col = lin(color), s = this.s;
    const dfx = (tx - 1) / sz, dfy = (ty - 1) / sz, tapered = tx !== 1 || ty !== 1;
    for (let i = 0; i < P.length; i += 3) {
      let x = P[i], y = P[i + 1], z = P[i + 2], nx = N[i], ny = N[i + 1], nz = N[i + 2];
      if (tapered) { // 윗면(z>0) 축소 = 높이에 따른 선형 축소. 법선은 야코비안 역전치로 보정
        const f = 1 + (tx - 1) * (z / sz + 0.5), g = 1 + (ty - 1) * (z / sz + 0.5);
        const mx = nx / f, my = ny / g; nz = nz - x * dfx * mx - y * dfy * my; nx = mx; ny = my;
        const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
        x *= f; y *= g;
      }
      const rx = m[0] * x + m[4] * y + m[8] * z, ry = m[1] * x + m[5] * y + m[9] * z, rz = m[2] * x + m[6] * y + m[10] * z;
      const qx = m[0] * nx + m[4] * ny + m[8] * nz, qy = m[1] * nx + m[5] * ny + m[9] * nz, qz = m[2] * nx + m[6] * ny + m[10] * nz;
      const bx = (rx + loc[0]) * s, by = (ry + loc[1]) * s, bz = (rz + loc[2]) * s;
      out.p.push(bx, bz, -by); out.n.push(qx, qz, -qy); out.c.push(col[0], col[1], col[2]); // Z-up → Y-up
    }
    this.count++;
  }
  eyes(y, z, dx = 0.14, s = 0.07, glint = true, color = K) {
    for (const sx of [-1, 1]) {
      this.b('eye', [s, 0.03, s * 1.15], [sx * dx, y, z], color, { bevel: 0.4 });
      if (glint) this.b('glint', [s * 0.35, 0.02, s * 0.35], [sx * dx - s * 0.18, y - 0.012, z + s * 0.25], W, { bevel: 0 });
    }
  }
  cheeks(y, z, dx = 0.22, col = '#ff8fa3') { for (const sx of [-1, 1]) this.b('cheek', [0.06, 0.016, 0.035], [sx * dx * 0.78, y, z], col, { bevel: 0.4 }); }
  geometries() {
    const mk = d => { if (!d.p.length) return null; const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(d.p, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(d.n, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(d.c, 3)); g.computeBoundingBox(); g.computeBoundingSphere(); return g; };
    return { lit: mk(this.lit), glow: mk(this.glow) };
  }
}

// ---------------------------------------------------------------- 무기 25종
function weapon(c, kind, x, hz, orb) {
  const y = -0.13;
  if (kind === 'sword') { c.b('blade', [.07, .03, .42], [x, y, hz + .32], STEEL, { bevel: .2, taper: [.6, 1] }); c.b('guard', [.20, .05, .05], [x, y, hz + .09], GOLD); c.b('grip', [.05, .05, .14], [x, y, hz], WOOD); }
  else if (kind === 'greatsword') { c.b('blade', [.15, .04, .74], [x, y, hz + .50], STEEL, { bevel: .2, taper: [.6, 1] }); c.b('guard', [.32, .06, .06], [x, y, hz + .11], GOLD); c.b('grip', [.06, .06, .18], [x, y, hz], WOOD); }
  else if (kind === 'rapier') { c.b('blade', [.03, .03, .56], [x, y, hz + .36], STEEL, { bevel: .2 }); c.b('cup', [.13, .11, .07], [x, y, hz + .06], GOLD, { bevel: .4 }); c.b('grip', [.04, .04, .10], [x, y, hz - .02], K); }
  else if (kind === 'katana') { c.b('blade', [.05, .03, .56], [x + .03, y, hz + .36], STEEL, { bevel: .2, rot: [0, 6, 0] }); c.b('tsuba', [.10, .08, .03], [x, y, hz + .08], K); c.b('grip', [.05, .05, .16], [x, y, hz], '#7b241c'); }
  else if (kind === 'bow' || kind === 'longbow') {
    const s = kind === 'bow' ? 1.0 : 1.5; hz = kind === 'bow' ? hz : hz + .22;
    c.b('bowMid', [.06, .06, .22 * s], [x + .06, y, hz + .1], WOOD); c.b('bowU', [.05, .05, .24 * s], [x + .01, y, hz + .1 + .2 * s], WOOD, { rot: [0, -28, 0] }); c.b('bowL', [.05, .05, .24 * s], [x + .01, y, hz + .1 - .2 * s], WOOD, { rot: [0, 28, 0] });
    c.b('string', [.015, .015, .58 * s], [x - .05, y, hz + .1], W, { bevel: 0 });
  }
  else if (kind === 'crossbow') { c.b('stock', [.09, .50, .09], [x - .06, y - .14, hz + .22], WOOD); c.b('bar', [.62, .09, .09], [x - .06, y - .36, hz + .24], '#5a3a1a'); c.b('limbL', [.09, .16, .09], [x - .40, y - .30, hz + .24], '#5a3a1a', { rot: [0, 0, -35] }); c.b('limbR', [.09, .16, .09], [x + .28, y - .30, hz + .24], '#5a3a1a', { rot: [0, 0, 35] }); c.b('string', [.50, .015, .015], [x - .06, y - .24, hz + .25], W, { bevel: 0 }); c.b('bolt', [.04, .3, .04], [x - .06, y - .30, hz + .29], STEEL, { bevel: .2 }); }
  else if (kind === 'staff') { c.b('pole', [.05, .05, .92], [x, y, hz + .26], WOOD); c.b('orb', [.17, .17, .17], [x, y, hz + .78], orb || '#74b9ff', { bevel: .45, emit: 1.5 }); c.b('cradle', [.12, .12, .05], [x, y, hz + .68], GOLD); }
  else if (kind === 'wand') { c.b('pole', [.04, .04, .34], [x, y, hz + .12], WOOD); c.b('orb', [.10, .10, .10], [x, y, hz + .32], orb || '#f7dc6f', { bevel: .45, emit: 1.5 }); }
  else if (kind === 'mace') { c.b('pole', [.05, .05, .44], [x, y, hz + .14], WOOD); c.b('headM', [.17, .17, .17], [x, y, hz + .42], METAL, { bevel: .35 }); c.b('stud', [.21, .06, .06], [x, y, hz + .42], GOLD); c.b('stud2', [.06, .21, .06], [x, y, hz + .42], GOLD); }
  else if (kind === 'hammer') { c.b('pole', [.06, .06, .60], [x, y, hz + .20], WOOD); c.b('headM', [.34, .18, .18], [x, y, hz + .54], METAL, { bevel: .25 }); }
  else if (kind === 'book') { c.b('cover', [.26, .07, .32], [x - .04, y - .12, hz + .06], '#7b241c', { rot: [-15, 0, 0] }); c.b('pages', [.22, .08, .28], [x - .04, y - .12, hz + .06], W, { bevel: .1, rot: [-15, 0, 0] }); c.b('gem', [.06, .02, .06], [x - .04, y - .162, hz + .07], GOLD, { rot: [-15, 0, 0] }); }
  else if (kind === 'lute') { c.b('luteBody', [.26, .12, .30], [x - .16, y - .12, hz - .02], WOOD, { bevel: .45, rot: [0, -35, 0] }); c.b('hole', [.08, .02, .08], [x - .16, y - .185, hz - .02], K, { bevel: .45 }); c.b('neck', [.06, .05, .36], [x + .04, y - .12, hz + .22], '#5a3a1a', { rot: [0, -35, 0] }); }
  else if (kind === 'harp') {
    const hx = x - .10, hy = y - .10, hb = hz + .10;
    c.b('lyreBase', [.26, .08, .08], [hx, hy, hb], GOLD, { bevel: .4 }); c.b('lyreTop', [.30, .05, .05], [hx, hy, hb + .30], GOLD);
    for (const sx of [-1, 1]) c.b('lyreArm', [.05, .06, .30], [hx + sx * .12, hy, hb + .15], GOLD, { rot: [0, sx * 8, 0] });
    for (const dx of [-.05, 0, .05]) c.b('lyreStr', [.012, .012, .26], [hx + dx, hy, hb + .16], W, { bevel: 0 });
  }
  else if (kind === 'flute') c.b('flute', [.04, .04, .44], [x - .1, y - .12, hz + .22], STEEL, { rot: [0, 60, 0], bevel: .3 });
  else if (kind === 'drum') { c.b('drum', [.34, .30, .22], [0, -.28, hz + .02], '#c0392b', { bevel: .2 }); c.b('skin', [.30, .26, .03], [0, -.28, hz + .14], '#f5e6c8', { bevel: .2 }); c.b('stick', [.03, .03, .26], [x, y - .06, hz + .14], WOOD, { rot: [40, 0, 0] }); }
  else if (kind === 'baton') c.b('baton', [.03, .03, .34], [x, y, hz + .16], W, { bevel: .2, rot: [0, 15, 0] });
  else if (kind === 'fan') { c.b('fan', [.20, .03, .24], [x, y, hz + .16], '#ff8fc8', { taper: [1.9, 1], bevel: .15 }); c.b('fanEdge', [.38, .035, .04], [x, y, hz + .27], GOLD, { bevel: .2 }); }
  else if (kind === 'dagger') { c.b('blade', [.06, .03, .20], [x, y, hz + .16], STEEL, { taper: [.5, 1], bevel: .2 }); c.b('guard', [.12, .04, .04], [x, y, hz + .05], GOLD); c.b('grip', [.04, .04, .08], [x, y, hz], K); }
  else if (kind === 'dual') { for (const xx of [x, -x]) { c.b('blade', [.06, .03, .34], [xx, y, hz + .24], STEEL, { taper: [.6, 1], bevel: .2 }); c.b('guard', [.14, .04, .04], [xx, y, hz + .06], GOLD); } }
  else if (kind === 'fist') { for (const xx of [x, -x]) c.b('wrap', [.14, .16, .08], [xx, 0, hz + .06], W, { bevel: .3 }); }
  else if (kind === 'gauntlet') { for (const xx of [x, -x]) c.b('gauntlet', [.18, .20, .18], [xx, -.01, hz + .02], METAL, { bevel: .3 }); }
  else if (kind === 'claws') { for (const xx of [x, -x]) for (const dx of [-.05, 0, .05]) c.b('claw', [.03, .03, .16], [xx + dx, -.08, hz - .04], W, { taper: [.3, .3], rot: [110, 0, 0], bevel: .2 }); }
  else if (kind === 'spear') { c.b('pole', [.04, .04, 1.1], [x, y, hz + .30], WOOD); c.b('tip', [.09, .04, .18], [x, y, hz + .92], STEEL, { taper: [.2, 1], bevel: .2 }); }
  else if (kind === 'scythe') { c.b('pole', [.05, .05, 1.3], [x + .10, y, hz + .42], '#9a7b5a'); c.b('bladeS', [.46, .03, .16], [x + .32, y, hz + 1.02], STEEL, { rot: [0, 18, 0], bevel: .2 }); c.b('bladeTip', [.22, .03, .11], [x + .58, y, hz + .88], STEEL, { rot: [0, 55, 0], bevel: .2 }); }
}

// ---------------------------------------------------------------- 머리 장식 18종 (+ 상점 전용 3종)
function headgear(c, kind, hz, hw, C, cc, hair) {
  const top = hz + .24;
  if (kind === 'helm') { c.b('helm', [hw + .06, .58, .26], [0, .01, top - .04], METAL); c.b('helmRim', [hw + .08, .60, .05], [0, .01, top - .16], cc); }
  else if (kind === 'fullhelm') { c.b('helm', [hw + .06, .58, .54], [0, .01, hz + .02], '#7f8c8d'); c.b('visor', [hw * .7, .03, .07], [0, -.285, hz], K, { bevel: .3 }); c.b('crest', [.06, .4, .08], [0, .02, top + .08], cc); }
  else if (kind === 'plume') { c.b('helm', [hw + .06, .58, .26], [0, .01, top - .04], METAL); c.b('plume', [.10, .40, .26], [0, .0, top + .20], cc, { bevel: .4 }); c.b('plume2', [.10, .30, .20], [0, .30, top + .10], cc, { bevel: .4, rot: [-30, 0, 0] }); }
  else if (kind === 'hood') { c.b('hood', [hw + .10, .62, .32], [0, .02, top - .06], C); c.b('hoodBack', [hw + .10, .20, .56], [0, .24, hz - .02], C); c.b('hoodTip', [.18, .16, .16], [0, .36, hz + .04], C); c.b('hoodSideL', [.07, .40, .44], [-(hw / 2 + .02), .08, hz], C); c.b('hoodSideR', [.07, .40, .44], [hw / 2 + .02, .08, hz], C); }
  else if (kind === 'wizard') { c.b('brim', [hw + .30, .84, .06], [0, .03, top - .03], C, { bevel: .4 }); c.b('cone', [.46, .46, .52], [0, .03, top + .16], C, { taper: [.2, .2] }); c.b('band', [.48, .48, .07], [0, .03, top - .04], cc); }
  else if (kind === 'circlet') { c.b('circlet', [hw + .04, .56, .05], [0, .01, hz + .12], cc); c.b('gem', [.07, .03, .08], [0, -.27, hz + .13], '#74b9ff', { bevel: .3, emit: 1 }); }
  else if (kind === 'crown') {
    c.b('crown', [hw * .8, .42, .09], [0, .01, top + .03], GOLD);
    for (const x of [-.18, -.06, .06, .18]) { c.b('point', [.08, .08, .12], [x, -.16, top + .12], GOLD, { taper: [.3, .3], bevel: .2 }); c.b('pointB', [.08, .08, .12], [x, .18, top + .12], GOLD, { taper: [.3, .3], bevel: .2 }); }
    c.b('jewel', [.06, .03, .05], [0, -.205, top + .03], '#e74c3c', { bevel: .3 });
  }
  else if (kind === 'feather') {
    const h = /^#[0-9a-f]{6}$/i.test(C) ? C : '#' + new THREE.Color(C).getHexString();
    const fc = parseInt(h.slice(3, 5), 16) > Math.max(parseInt(h.slice(1, 3), 16), parseInt(h.slice(5, 7), 16)) ? '#e74c3c' : '#2ecc71';
    c.b('cap', [hw + .06, .58, .14], [0, .01, top], C); c.b('capBrim', [hw + .1, .3, .04], [0, -.2, top - .07], C, { bevel: .4 }); c.b('feather', [.05, .22, .30], [.22, .1, top + .18], fc, { rot: [-25, 0, 0], taper: [.4, .6], bevel: .3 });
  }
  else if (kind === 'bandana') { c.b('band', [hw + .06, .58, .13], [0, .01, hz + .13], cc); c.b('knot', [.12, .12, .12], [.2, .32, hz + .12], cc); c.b('tail', [.08, .06, .26], [.24, .36, hz - .04], cc, { rot: [-15, 0, 0] }); c.b('tail2', [.08, .06, .20], [.12, .36, hz - .02], cc, { rot: [-15, 0, 0] }); }
  else if (kind === 'cap') { c.b('beret', [hw + .08, .60, .14], [0, .03, top], C, { bevel: .45 }); c.b('nub', [.06, .06, .06], [0, .03, top + .09], cc, { bevel: .4 }); }
  else if (kind === 'mitre') { c.b('mitre', [.42, .30, .46], [0, .02, top + .18], W, { taper: [.5, .8] }); c.b('stripe', [.08, .31, .40], [0, .02, top + .16], cc, { taper: [.5, .8] }); c.b('mBand', [.44, .32, .07], [0, .02, top - .01], cc); }
  else if (kind === 'halo') { for (let i = 0; i < 10; i++) { const a = i * Math.PI / 5; c.b('halo', [.15, .06, .05], [.22 * Math.cos(a), .02 + .22 * Math.sin(a), top + .22], '#f7dc6f', { rot: [0, 0, a / DEG + 90], bevel: .4, emit: 2.5 }); } }
  else if (kind === 'horns') { for (const sx of [-1, 1]) c.b('horn', [.15, .15, .40], [sx * (hw / 2), .02, top + .08], '#f0e6d2', { taper: [.2, .2], rot: [0, sx * 35, 0], bevel: .2 }); }
  else if (kind === 'fur') { c.b('furHat', [hw + .08, .60, .26], [0, .02, top], '#8b5a2b', { bevel: .45 }); c.b('furTrim', [hw + .14, .66, .13], [0, .02, top - .13], '#f3ead8', { bevel: .45 }); c.b('furTail', [.12, .12, .34], [.18, .34, hz - .02], '#8b5a2b', { bevel: .4, rot: [-10, 0, 0] }); c.b('furTailTip', [.13, .13, .10], [.18, .38, hz - .2], '#f3ead8', { bevel: .4 }); c.b('furFlapL', [.08, .26, .30], [-(hw / 2 + .03), .04, hz + .02], '#8b5a2b', { bevel: .4 }); c.b('furFlapR', [.08, .26, .30], [hw / 2 + .03, .04, hz + .02], '#8b5a2b', { bevel: .4 }); }
  else if (kind === 'goggles') {
    c.b('strap', [hw + .03, .55, .07], [0, .01, hz + .15], '#2c2c2c');
    for (const sx of [-1, 1]) c.b('lens', [.15, .05, .11], [sx * .12, -.27, hz + .15], '#74b9ff', { bevel: .4, emit: .5 });
  }
  else if (kind === 'mask') c.b('mask', [hw + .02, .53, .16], [0, .0, hz - .13], '#1c1c1c');
  else if (kind === 'tophat') { c.b('brim', [hw + .14, .66, .05], [0, .02, top - .02], '#1c1c1c', { bevel: .4 }); c.b('hat', [.40, .40, .34], [0, .02, top + .16], '#1c1c1c', { bevel: .2 }); c.b('hatBand', [.41, .41, .07], [0, .02, top + .05], cc, { bevel: .2 }); }
  // ---- 아래 3종은 Python 원본에 없는 상점 전용 장식 (게임의 2D 픽셀맵 색을 따라 새로 만든 것)
  else if (kind === 'ribbon') { for (const sx of [-1, 1]) c.b('bowWing', [.20, .09, .16], [sx * .13, -.04, top + .11], '#ff5c8a', { taper: [1, 1], rot: [0, sx * 22, 0], bevel: .35 }); c.b('bowKnot', [.09, .11, .10], [0, -.04, top + .09], '#ffd1dc', { bevel: .4 }); }
  else if (kind === 'flower') {
    const fx = .20, fy = -.255, fz = hz + .19;
    for (const [dx, dz] of [[.07, 0], [-.07, 0], [0, .07], [0, -.07]]) c.b('petal', [.085, .04, .085], [fx + dx, fy, fz + dz], '#ff8fc8', { bevel: .45 });
    c.b('pistil', [.075, .06, .075], [fx, fy - .01, fz], '#ffe066', { bevel: .45 });
  }
  else if (kind === 'catears') { for (const sx of [-1, 1]) { c.b('ear', [.20, .12, .22], [sx * .18, .02, top + .12], hair, { taper: [.2, .6], rot: [0, sx * 14, 0], bevel: .25 }); c.b('earIn', [.10, .02, .11], [sx * .18, -.045, top + .10], '#ffb6c1', { taper: [.2, 1], rot: [0, sx * 14, 0], bevel: .25 }); } }
}

// ---------------------------------------------------------------- 사람형 (Python human())
// look: { hair, hairColor, skin, armor, weapon, head, col:{C,c,P}, shield, orb, cape } — 머리모양/머리색/피부는 look 에서 가져온다
const AGES = { kid: [.14, .26, .80], teen: [.20, .32, .92], adult: [.28, .38, 1.0] };
function human(look, age, headOnly = false) {
  const [lg, th, sc] = AGES[age] || AGES.adult;
  const c = new Char(sc), C = look.col.C, cc = look.col.c, P = look.col.P;
  const skin = look.skin, hair = look.hairColor, style = look.hair, armor = look.armor, head = look.head || 'none';
  const tz = lg + th / 2, hz = lg + th + .24, hw = .56;
  if (!headOnly) {
    for (const sx of [-1, 1]) {
      if (armor !== 'robe') c.b('leg', [.16, .18, lg], [sx * .10, 0, lg / 2 + .02], P);
      c.b('shoe', [.17, .24, .08], [sx * .10, -.03, .04], '#3a2a1a');
      c.b('arm', [.12, .16, th * .8], [sx * .29, 0, tz + .02], C); c.b('hand', [.12, .14, .10], [sx * .29, 0, tz - th * .42], skin);
      if (armor === 'plate') { c.b('pauldron', [.20, .22, .12], [sx * .30, 0, tz + th * .42], cc); c.b('knee', [.18, .20, .08], [sx * .10, 0, lg * .6], METAL); }
      if (armor === 'leather') { c.b('boot', [.18, .22, lg * .5], [sx * .10, -.01, lg * .28], '#5a3a1a'); c.b('bracer', [.14, .18, .08], [sx * .29, 0, tz - th * .26], cc); }
    }
    c.b('torso', [.44, .30, th], [0, 0, tz], C);
    if (armor === 'robe') { c.b('skirt', [.54, .40, lg + .10], [0, 0, lg / 2 + .05], C, { taper: [.8, .76] }); c.b('trim', [.56, .42, .05], [0, 0, .06], cc, { bevel: .4 }); c.b('sash', [.46, .32, .06], [0, 0, lg + .04], cc); }
    else if (armor === 'plate') { c.b('chest', [.24, .03, th * .42], [0, -.152, tz + .04], METAL, { bevel: .3 }); c.b('belt', [.46, .32, .06], [0, 0, lg + .03], '#5a3a1a'); }
    else if (armor === 'leather') { c.b('belt', [.46, .32, .06], [0, 0, lg + .03], '#5a3a1a'); c.b('buckle', [.08, .02, .07], [0, -.165, lg + .03], GOLD); c.b('strap', [.08, .31, th * 1.0], [.06, 0, tz], cc, { rot: [0, 25, 0], bevel: .2 }); }
    else { c.b('emblem', [.14, .02, .14], [0, -.155, tz + .04], cc, { bevel: .3 }); c.b('sash', [.46, .32, .06], [0, 0, lg + .03], cc); }
    // 망토 (게임의 꾸미기 아이템): 등 뒤에 어깨부터 종아리까지, 아래로 갈수록 넓게
    if (look.cape) {
      const top = lg + th + .01, bot = Math.max(.07, lg * .35), h = top - bot;
      c.b('cape', [.80, .05, h], [0, .19, bot + h / 2], look.cape, { taper: [.70, 1], bevel: .3, rot: [-6, 0, 0] });
      c.b('capeCollar', [.50, .34, .05], [0, .01, lg + th - .01], look.cape, { bevel: .4 });
    }
  }
  // 머리와 머리카락
  c.b('head', [hw, .50, .48], [0, 0, hz], skin);
  c.eyes(-.262, hz, .13, .075); c.cheeks(-.262, hz - .10, .19); c.b('mouth', [.07, .02, .025], [0, -.262, hz - .12], '#8b3a3a', { bevel: .4 });
  if (head !== 'fullhelm' && head !== 'hood') {
    c.b('hairTop', [hw + .04, .54, .20], [0, .02, hz + .18], hair); c.b('hairBack', [hw + .04, .12, .40], [0, .24, hz + .02], hair); c.b('fringe', [hw * .9, .06, .10], [0, -.25, hz + .19], hair);
    if (style === 'long') c.b('hairLong', [hw + .02, .12, .66], [0, .26, hz - .14], hair);
    if (style === 'pony') { c.b('ponyKnot', [.18, .18, .18], [0, .26, hz + .36], hair, { bevel: .4 }); c.b('pony', [.15, .15, .50], [0, .40, hz + .12], hair, { rot: [-14, 0, 0] }); }   // 정면 3/4 시점에서도 보이도록 높게 묶음
    if (style === 'bob') for (const sx of [-1, 1]) c.b('bob', [.08, .40, .34], [sx * (hw / 2 + .01), .04, hz], hair);
  }
  if (head === 'hood') c.b('fringe', [hw * .9, .06, .10], [0, -.25, hz + .19], hair);
  headgear(c, head, hz, hw, C, cc, hair);
  if (!headOnly) {
    const hand = tz - th * .42;
    // 긴 무기는 머리 옆을 파고들지 않게 손보다 바깥쪽에 둔다
    const wx = ['staff', 'hammer', 'mace', 'greatsword', 'longbow', 'bow', 'spear', 'scythe'].includes(look.weapon) ? .40 : .29;
    weapon(c, look.weapon, wx, hand, look.orb);
    if (look.shield) { c.b('shield', [.30, .07, .38], [-.44, -.14, tz], METAL, { bevel: .3 }); c.b('shieldEm', [.14, .03, .16], [-.44, -.18, tz + .02], cc, { bevel: .3 }); }
  }
  return c;
}

// ---------------------------------------------------------------- 캐릭터 캐시 (외형/나이가 바뀔 때만 다시 만든다)
const YAW = -25 * DEG, TILT = 9 * DEG;
const matLit = new THREE.MeshLambertMaterial({ vertexColors: true });
const matGlow = new THREE.MeshBasicMaterial({ vertexColors: true });
const charCache = new Map(); const CACHE_MAX = 40;
export function lookKey(look, age, headOnly) {
  const col = look.col || {};
  return [age, headOnly ? 1 : 0, look.hair, look.hairColor, look.skin, look.armor, look.weapon, look.head || 'none', col.C, col.c, col.P, look.shield ? 1 : 0, look.orb || '', look.cape || ''].join('|');
}
function getChar(look, age, headOnly = false) {
  const key = lookKey(look, age, headOnly);
  let e = charCache.get(key);
  if (e) { charCache.delete(key); charCache.set(key, e); return e; }
  const c = human(look, age, headOnly); e = c.geometries(); e.key = key; e.parts = c.count;
  // 미리보기용 프레임: 3/4 회전 상태의 실제 경계
  const m = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(TILT, YAW, 0)), v = new THREE.Vector3(), box = new THREE.Box3();
  for (const g of [e.lit, e.glow]) { if (!g) continue; const p = g.attributes.position; for (let i = 0; i < p.count; i++) box.expandByPoint(v.fromBufferAttribute(p, i).applyMatrix4(m)); }
  e.box = box;
  charCache.set(key, e);
  if (charCache.size > CACHE_MAX) { const [k, old] = charCache.entries().next().value; charCache.delete(k); old.lit && old.lit.dispose(); old.glow && old.glow.dispose(); }
  return e;
}
function makeRig() { // 씬 하나 = 조명 + 캐릭터 그룹(메시 2개: 일반/발광)
  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff, 1.75));
  const sun = new THREE.DirectionalLight(0xfff7ea, 1.9); sun.position.set(-3, 6, 4); scene.add(sun);   // Blender (-3,-4,6)
  const fill = new THREE.DirectionalLight(0xccd9ff, 0.35); fill.position.set(4, 3, 2); scene.add(fill); // Blender (4,-2,3)
  const root = new THREE.Group(), group = new THREE.Group(); group.rotation.set(TILT, YAW, 0); root.add(group); scene.add(root);
  const lit = new THREE.Mesh(new THREE.BufferGeometry(), matLit), glow = new THREE.Mesh(new THREE.BufferGeometry(), matGlow);
  lit.frustumCulled = glow.frustumCulled = false; group.add(lit, glow);
  const empty = lit.geometry;
  return { scene, root, group, key: null, set(e) { if (this.key === e.key) return; this.key = e.key; lit.geometry = e.lit || empty; lit.visible = !!e.lit; glow.geometry = e.glow || empty; glow.visible = !!e.glow; } };
}
function makeRenderer(canvas) {
  const r = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, premultipliedAlpha: true, powerPreference: 'low-power' });
  r.setClearColor(0x000000, 0);
  return r;
}

// ---------------------------------------------------------------- 공개 API
// create(cv, poseFn): cv = 게임의 2D 장면 캔버스(160x100 논리 좌표). 실패하면 null → 게임은 2D 로 그린다.
export function create(cv, poseFn) {
  let renderer;
  const gl = document.createElement('canvas'); gl.id = 'gl'; gl.setAttribute('aria-hidden', 'true');
  try { renderer = makeRenderer(gl); } catch (err) { return null; }
  if (!renderer.getContext()) return null;
  const LW = cv.width, LH = cv.height, UNIT = 38; // 1 Blender 단위 = 38 논리 px → 어른 키 약 45px
  cv.parentNode.insertBefore(gl, cv.nextSibling);
  const rig = makeRig();
  const cam = new THREE.OrthographicCamera(0, LW, LH, 0, 0.1, 400); cam.position.set(0, 0, 200);
  const api = { ok: true, lost: false, frames: 0, canvas: gl, renderer, cacheSize: () => charCache.size, built: 0 };
  let state = null, tickAt = 0, yaw = YAW, pw = 0, ph = 0, raf = 0;
  gl.addEventListener('webglcontextlost', e => { e.preventDefault(); api.ok = false; api.lost = true; });
  gl.addEventListener('webglcontextrestored', () => { api.ok = true; api.lost = false; });
  function resize() {
    const pr = Math.min(window.devicePixelRatio || 1, 2), w = Math.max(1, Math.round(cv.clientWidth * pr)), h = Math.max(1, Math.round(cv.clientHeight * pr));
    if (w !== pw || h !== ph) { pw = w; ph = h; renderer.setPixelRatio(1); renderer.setSize(w, h, false); api.pixelRatio = pr; }
  }
  function draw(now) {
    raf = 0;
    if (!state || !api.ok) return;
    raf = requestAnimationFrame(draw);
    resize();
    const tf = state.frame + Math.min(1.5, (now - tickAt) / 100); // 게임 틱(100ms) 사이를 부드럽게 보간
    const p = poseFn(tf), g = rig.group, root = rig.root;
    const want = p.hunting ? 28 * DEG : YAW; yaw += (want - yaw) * 0.25;   // 사냥 중엔 몬스터(오른쪽)를 바라본다
    let rz = 0, sy = 1, y = LH - state.ground - p.bob;
    if (p.hunting) rz = -Math.sin(tf * 0.8) * 0.10;                          // 돌진하며 앞뒤로 기울기
    else if (p.training) { rz = Math.sin(tf * 1.2) * 0.07; sy = 1 + Math.sin(tf * 2.4) * 0.03; }
    else if (!p.resting) rz = Math.sin(tf * 0.1) * 0.02;
    root.position.set(p.cx, y, 0); root.rotation.z = rz; root.scale.set(UNIT, UNIT * sy, UNIT); g.rotation.set(p.resting ? TILT + 0.10 : TILT, yaw, 0);
    renderer.render(rig.scene, cam); api.frames++;
  }
  // 게임 틱마다 호출: 외형이 바뀌었을 때만 모델을 새로 만든다
  api.show = (look, age, frame, ground = 80) => {
    if (!api.ok) return false;
    const key = lookKey(look, age, false);
    if (rig.key !== key) { rig.set(getChar(look, age)); api.built++; }
    state = { frame, ground }; tickAt = performance.now(); gl.style.visibility = 'visible';
    if (!raf) raf = requestAnimationFrame(draw);
    return true;
  };
  api.hide = () => { state = null; gl.style.visibility = 'hidden'; };

  // ---- 미리보기 (작은 2D 캔버스에 3D 모델을 그려 넣는다): 두 번째 작은 렌더러 사용
  let pv = null;
  function previewer() {
    if (pv) return pv;
    const c = document.createElement('canvas'); let r;
    try { r = makeRenderer(c); } catch (err) { return null; }
    const prig = makeRig(); const pcam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100); pcam.position.set(0, 0, 50);
    c.addEventListener('webglcontextlost', e => { e.preventDefault(); pv = null; });
    pv = { c, r, rig: prig, cam: pcam, w: 0, h: 0 }; return pv;
  }
  // target: 2D 캔버스. opts.head = 머리만(상점 아이콘). 성공하면 true
  api.preview = (target, look, age, opts = {}) => {
    if (!api.ok) return false;
    const p = previewer(); if (!p) return false;
    try {
      const e = getChar(look, age, !!opts.head), W_ = target.width, H_ = target.height, asp = W_ / H_;
      if (p.w !== W_ || p.h !== H_) { p.r.setPixelRatio(1); p.r.setSize(W_, H_, false); p.w = W_; p.h = H_; }
      p.rig.set(e);
      const b = e.box, bw = b.max.x - b.min.x, bh = b.max.y - b.min.y, cx = (b.min.x + b.max.x) / 2;
      let vh, bottom;
      if (opts.head) { vh = Math.max(bh * 1.12, bw * 1.12 / asp); bottom = (b.min.y + b.max.y) / 2 - vh / 2; }
      else { vh = Math.max(bh * 1.08 + .06, bw * 1.08 / asp, 1.25); bottom = -.05; } // 최소 프레임 1.25 → 아이는 작게 보인다
      const vw = vh * asp;
      p.cam.left = cx - vw / 2; p.cam.right = cx + vw / 2; p.cam.bottom = bottom; p.cam.top = bottom + vh; p.cam.updateProjectionMatrix();
      p.r.render(p.rig.scene, p.cam);
      const ctx = target.getContext('2d'); ctx.clearRect(0, 0, W_, H_); ctx.drawImage(p.c, 0, 0, W_, H_);
      return true;
    } catch (err) { return false; }
  };
  api.human = human; api.THREE = THREE;
  return api;
}
