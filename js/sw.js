console.log('Service Worker registered!');

// wait for install event to complete then load all files in cache
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('restaurant-files')
        .then(function (cache) {
            console.log('cache loaded');
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                '/data/restaurants.json',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/js/sw.js',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
            ]);
        })
        .catch(function (err) {
            console.error(err);
        })
    );
});


// listens for fetch event and response if caches match or if not fetch event request
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        }).catch(function (err) {
            console.error(err);
        })
    );
});