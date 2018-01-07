const isServiceWorkerSupported = () => Boolean(navigator.serviceWorker);
const isServiceWorkerEnabled = () => new URLSearchParams(location.search).has('disable-sw') === false;

/**
 * Register a service worker if supported.
 * Can be disabled with the `disable-sw` query parameter for development purposes.
 * @param {string} path - The service worker URL path.
 */
export function registerServiceWorker(path) {
  if (isServiceWorkerSupported() && isServiceWorkerEnabled()) {
    navigator.serviceWorker.register(path);
  }
}
