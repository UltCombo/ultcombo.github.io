import { fetchJSON } from '../fetchJSON.js';

const BASE_URL = 'https://api.npmjs.org';
const request = path => fetchJSON(`${BASE_URL}${path}`);

/**
 * Get total downloads for the given npm packages.
 * @param {string[]} packages
 * @returns {Promise<number>}
 */
export async function getDownloads(packages) {
  const stats = await Promise.all(packages.map(pkg => request(`/downloads/point/2000-01-01:3000-01-01/${pkg}`)));
  return stats.reduce((total, stat) => total + stat.downloads, 0);
}
