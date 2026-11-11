// 컬러 다마고치 서비스 워커: 첫 접속 때 전체 파일을 캐시해 이후 오프라인 실행
const VERSION = 'land-v1';
const FILES = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "sprites/egg_fire.webp", "sprites/egg_water.webp", "sprites/egg_elec.webp", "sprites/egg_grass.webp", "sprites/egg_dark.webp", "sprites/egg_fairy.webp", "sprites/baby_fire.webp", "sprites/baby_water.webp", "sprites/baby_elec.webp", "sprites/baby_grass.webp", "sprites/baby_dark.webp", "sprites/baby_fairy.webp", "sprites/child_fire.webp", "sprites/child_water.webp", "sprites/child_elec.webp", "sprites/child_grass.webp", "sprites/child_dark.webp", "sprites/child_fairy.webp", "sprites/tyranovolke.webp", "sprites/flare_dragon.webp", "sprites/magma_turtle.webp", "sprites/flame_fox.webp", "sprites/ash_ghost.webp", "sprites/plesio.webp", "sprites/aqua_serpent.webp", "sprites/bubble_frog.webp", "sprites/wave_dolphin.webp", "sprites/deep_angler.webp", "sprites/thunder_raptor.webp", "sprites/thunder_dragon.webp", "sprites/spark_mouse.webp", "sprites/bolt_hummingbird.webp", "sprites/static_cloud.webp", "sprites/tricera.webp", "sprites/flower_deer.webp", "sprites/bronto.webp", "sprites/leaf_butterfly.webp", "sprites/mushroom_toad.webp", "sprites/night_wolf.webp", "sprites/bat_dragon.webp", "sprites/ankylo_shadow.webp", "sprites/ghost_cat.webp", "sprites/void_jelly.webp", "sprites/pink_ptera.webp", "sprites/unicorn.webp", "sprites/candy_sheep.webp", "sprites/star_rabbit.webp", "sprites/fairy_cookie.webp"];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('land-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
    if (res.ok && new URL(e.request.url).origin === location.origin) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
    return res;
  })));
});
