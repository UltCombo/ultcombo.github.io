import shortNumber from 'short-number';

/**
 * Format a number with `k`, `m` etc. suffixes.
 * 1111 -> '1.1k'
 * @param {number} number
 * @returns {string}
 */
export const formatNumber = number => String(shortNumber(number)).toLowerCase();
