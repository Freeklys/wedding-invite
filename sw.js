const cacheName = 'wedding-v1';
const assets = [
  '/', 'index.html', 'veil-loop.mp4',
  'favicon.ico', 'manifest.json',
  // … добавьте остальные файлы ассетов и шрифтов
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => res || fetch(evt.request))
  );
});
