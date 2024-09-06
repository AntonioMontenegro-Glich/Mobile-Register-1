self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('complaints-store').then((cache) => cache.addAll([
            '/index.html',
            '/css/Style.css',
            '/js/app.js',
            '/manifest.json'
        ]))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
