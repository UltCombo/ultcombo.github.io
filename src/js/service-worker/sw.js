/* global workbox: false, WorkboxSW: false, localforage: false */
'use strict';

// NOTE: The production build script replaces development libraries with their production versions.
importScripts('src/vendor/js/workbox-sw.dev.v2.1.2.js');
importScripts('src/vendor/js/workbox-google-analytics.dev.v2.1.1.js');
importScripts('src/vendor/js/localforage.min.js');

workbox.googleAnalytics.initialize();

const workboxSW = new WorkboxSW();
const cacheFirstStrategy = workboxSW.strategies.cacheFirst({
  cacheableResponse: {
    statuses: [0, 200],
  },
});
const staleWhileRevalidateStrategy = workboxSW.strategies.staleWhileRevalidate();

// Resources.
workboxSW.router.registerRoute(/\.(?:png|woff2)(?:\?|$)/, cacheFirstStrategy);
workboxSW.router.registerRoute(RegExp('^https://fonts.gstatic.com/'), cacheFirstStrategy);
workboxSW.router.registerRoute(RegExp('^https://cdn.polyfill.io/'), staleWhileRevalidateStrategy);

// API responses.
workboxSW.router.registerRoute(RegExp('^https://api.npmjs.org/'), staleWhileRevalidateStrategy);
workboxSW.router.registerRoute(RegExp('^https://api.stackexchange.com/'), staleWhileRevalidateStrategy);

// The Cache API does not support caching POST requests (https://github.com/w3c/ServiceWorker/issues/977).
// Use a custom "stale while revalidate" strategy with IndexedDB to cache GitHub API responses.
const githubStaleWhileRevalidateStrategy = {
  handle: async ({ event: { request } }) => {
    const requestHash = JSON.stringify({
      method: request.method,
      url: request.url,
      body: await request.clone().text(),
    });

    const fetchPromise = (async () => {
      const networkResponse = await fetch(request);

      // Cache response asynchronously if valid.
      if (networkResponse.status === 200) {
        localforage.setItem(requestHash, {
          contentType: networkResponse.headers.get('Content-Type'),
          body: await networkResponse.clone().text(),
        });
      }

      return networkResponse;
    })();

    const cachedResponse = await localforage.getItem(requestHash);

    if (cachedResponse) {
      return new Response(cachedResponse.body, {
        headers: new Headers({ 'Content-Type': cachedResponse.contentType }),
      });
    }

    return fetchPromise;
  },
};
workboxSW.router.registerRoute(RegExp('^https://api.github.com/'), githubStaleWhileRevalidateStrategy, 'POST');

// Webpack builds the precache list from the Workbox plugin config. Do not edit the code below.
workboxSW.precache([]);
