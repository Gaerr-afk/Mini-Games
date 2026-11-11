// 철갑상어 해양편 서비스 워커: 첫 접속 때 전체 파일을 캐시해 이후 오프라인 실행. 게임을 고치면 VERSION 을 올려야 휴대폰에 반영된다.
const VERSION = 'ocean-v1';
const FILES = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "sprites/roe_river.webp", "sprites/roe_coast.webp", "sprites/roe_tropical.webp", "sprites/roe_deep.webp", "sprites/roe_polar.webp", "sprites/roe_ocean.webp", "sprites/fry_river.webp", "sprites/fry_coast.webp", "sprites/fry_tropical.webp", "sprites/fry_deep.webp", "sprites/fry_polar.webp", "sprites/fry_ocean.webp", "sprites/juvenile_river.webp", "sprites/juvenile_coast.webp", "sprites/juvenile_tropical.webp", "sprites/juvenile_deep.webp", "sprites/juvenile_polar.webp", "sprites/juvenile_ocean.webp", "sprites/river_sturgeon.webp", "sprites/golden_sturgeon.webp", "sprites/beluga_sturgeon.webp", "sprites/swift_sturgeon.webp", "sprites/mud_catfish.webp", "sprites/green_seaturtle.webp", "sprites/coral_seahorse.webp", "sprites/spiny_puffer.webp", "sprites/silver_sardine.webp", "sprites/rock_crab.webp", "sprites/clownfish.webp", "sprites/manta_ray.webp", "sprites/giant_grouper.webp", "sprites/flying_fish.webp", "sprites/moray_eel.webp", "sprites/lantern_angler.webp", "sprites/giant_squid.webp", "sprites/ocean_sunfish.webp", "sprites/ghost_eel.webp", "sprites/vampire_squid.webp", "sprites/beluga.webp", "sprites/narwhal.webp", "sprites/orca.webp", "sprites/emperor_penguin.webp", "sprites/greenland_shark.webp", "sprites/bluefin_tuna.webp", "sprites/humpback.webp", "sprites/whale_shark.webp", "sprites/blue_marlin.webp", "sprites/great_white.webp"];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('ocean-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
    if (res.ok && new URL(e.request.url).origin === location.origin) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
    return res;
  })));
});
