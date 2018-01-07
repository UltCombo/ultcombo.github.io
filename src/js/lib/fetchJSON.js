/**
 * Perform a regular `fetch` and parse the response as JSON.
 * Accepts the same arguments as `window.fetch`.
 * @returns {Promise<*>}
 */
export const fetchJSON = (...args) => fetch(...args).then(response => response.json());
