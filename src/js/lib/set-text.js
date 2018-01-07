/**
 * Set the text content of the given selectors.
 * @param {Object} texts - { selector: textContent }
 */
export function setText(texts) {
  for (const [selector, text] of Object.entries(texts)) {
    document.querySelector(selector).textContent = text;
  }
}
