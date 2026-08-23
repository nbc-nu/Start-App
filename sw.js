const CACHE_NAME = 'v1-cache';
// Ajustado para caminhos relativos
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

// ... restante da lógica do service worker (install, activate, fetch)
self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS_TO_CACHE))));
self.addEventListener('fetch', (e) => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
