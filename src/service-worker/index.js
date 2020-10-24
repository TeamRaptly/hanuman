const cacheName = 'hanuman-service-worker-app';

// Caching notes
// https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
  // eslint-disable-next-line no-console
  console.log('Service worker installing...');
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        '/',
        '/about',
        '/_features',
        '/error',
        '/about.bundle.js',
        '/client.bundle.js',
        '/common.bundle.js',
        '/error.bundle.js',
        '/features.bundle.js',
        '/home.bundle.js',
        '/manifest.json',
        '/react-material.bundle.js',
        '/sw.bundle.js',
        '/vendor.bundle.js',
        '/assets',
        '/assets/icon-192.png',
        '/assets/hanuman-logo.jpg'
      ]);
    })
  );
  // eslint-disable-next-line no-restricted-globals
  self.skipWaiting();
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', (event) => {
  // eslint-disable-next-line no-console
  console.log('Service worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(() => {
            // Return true if you want to remove this cache,
            // but remember that caches are shared across
            // the whole origin
            // Change this to conditional based on resource being requested on network
            return true;
          })
          .map((cache) => {
            return caches.delete(cache);
          })
      );
    })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  // eslint-disable-next-line no-console
  console.log('Fetching:', event.request.url);
  event.respondWith(
    caches.open(cacheName).then((cache) => {
      return fetch(event.request)
        .then((response) => {
          cache.put(event.request, response.clone());
          return response;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('Error...', error);
          // eslint-disable-next-line no-console
          console.log(`Serving ${event.request.url} from service worker cache`);
          return cache.match(event.request).then((response) => {
            return response;
          });
        });
    })
  );
});
