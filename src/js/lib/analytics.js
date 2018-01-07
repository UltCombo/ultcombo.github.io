const track = (category, action, label) => ga('send', 'event', category, action, label, { transport: 'beacon' });

/**
 * Track link clicks with Google Analytics.
 * @param {ArrayLike<HTMLAnchorElement>} links - NodeList or array of <a> elements to track.
 */
export function trackLinks(links) {
  for (const link of Array.from(links)) {
    link.addEventListener('click', () => track('link', 'click', link.href));
  }
}
