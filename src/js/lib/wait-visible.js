/**
 * Returns a promise that resolves when the given selector is visible within the viewport.
 * @param {string} selector
 * @returns {Promise<void>}
 */
export function waitVisible(selector) {
  return new Promise(resolve => {
    const observer = new IntersectionObserver(
      entries => {
        if (!entries[0].isIntersecting) return;

        observer.disconnect();
        resolve();
      },
      { rootMargin: '0px 0px -100px 0px' },
    );

    observer.observe(document.querySelector(selector));
  });
}
