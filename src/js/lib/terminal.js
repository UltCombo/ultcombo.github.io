import { Termynal } from '../../vendor/js/termynal.min.js';

/**
 * Initialize the terminal animation for the given selector.
 * @param {string} selector
 */
export const initTerminal = selector => new Termynal(selector, { startDelay: 0, typeDelay: 50, lineDelay: 650 });
