import { fetchJSON } from '../fetchJSON.js';

const BASE_URL = 'https://api.stackexchange.com';
const request = path => fetchJSON(`${BASE_URL}${path}`);

/**
 * Get Stack Overflow user stats.
 * @param {number} userId
 * @returns {Promise<Object>}
 */
export async function getUser(userId) {
  const result = await request(`/2.2/users/${userId}?site=stackoverflow&filter=!)scY2t2ZXiZikVLZ1Zie`);
  const user = result.items[0];
  const { reputation, badge_counts: badgeCounts } = user;

  return { reputation, badgeCounts };
}
