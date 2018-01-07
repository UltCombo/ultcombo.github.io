import { fetchJSON } from '../fetchJSON.js';

// Access token with read-only access to public information.
const ACCESS_TOKEN = 'd5983dc8314b6b35fedc8f8a10f49980fd06a72a';
const ENDPOINT = 'https://api.github.com/graphql';
const userQuery = `
  query($login: String!) {
    user(login: $login) {
      ownRepos: repositories(isFork: false) {
        totalCount
      }
      forks: repositories(isFork: true) {
        totalCount
      }
      followers {
        totalCount
      }
      repositories(first: 100, orderBy: { field: STARGAZERS, direction: DESC }) {
        edges {
          node {
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

const request = (query, variables) =>
  fetchJSON(ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `bearer ${ACCESS_TOKEN}` },
    body: JSON.stringify({ query, variables }),
  });

/**
 * Get GitHub user stats.
 * @param {string} login
 * @returns {Promise<Object>}
 */
export async function getUser(login) {
  const {
    data: {
      user: {
        ownRepos: { totalCount: ownRepos },
        forks: { totalCount: forks },
        followers: { totalCount: followers },
        repositories: { edges: repositories },
      },
    },
  } = await request(userQuery, { login });

  return {
    ownRepos,
    forks,
    followers,
    stargazers: repositories.reduce((total, repository) => total + repository.node.stargazers.totalCount, 0),
  };
}
