importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');


//custom adjustments
console.log("adjustments loaded");

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "260f65e3e7c2fa6952ac9131086d0030"
  },
  {
    "url": "index.html",
    "revision": "cbf11e2c25fc41670624895aeeb33f92"
  },
  {
    "url": "js/app.js",
    "revision": "69faedc2b7d68011e0e3286c5aecebbe"
  }
]);
