const CACHE_NAME = 'v7-cache';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg'
];

self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS_TO_CACHE))));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k))))));
self.addEventListener('fetch', (e) => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
