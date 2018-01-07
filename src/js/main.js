import { getStackOverflowUser, getGitHubUser, getNpmDownloads } from './lib/api.js';
import { setText } from './lib/set-text.js';
import { formatNumber } from './lib/format-number.js';
import { delay } from './lib/delay.js';
import { waitVisible } from './lib/wait-visible';
import { initTerminal } from './lib/terminal.js';
import { trackLinks } from './lib/analytics.js';
import { registerServiceWorker } from './lib/register-sw.js';

// Populate Stack Overflow badge data.
(async () => {
  const { reputation, badgeCounts: { gold, silver, bronze } } = await getStackOverflowUser(1331430);

  setText({
    '#stackoverflow-reputation-value': formatNumber(reputation),
    '#stackoverflow-gold-badges-count': formatNumber(gold),
    '#stackoverflow-silver-badges-count': formatNumber(silver),
    '#stackoverflow-bronze-badges-count': formatNumber(bronze),
  });
})();

// Populate GitHub badge data.
(async () => {
  const { ownRepos, forks, followers, stargazers } = await getGitHubUser('UltCombo');

  setText({
    '#own-repos-count': formatNumber(ownRepos),
    '#forks-count': formatNumber(forks),
    '#followers-count': formatNumber(followers),
    '#stargazers-count': formatNumber(stargazers),
  });
})();

// Populate npm badge data.
(async () => {
  const packages = [
    'glob-manipulate',
    'globby',
    'gulp-buster',
    'gulp-src-ordered-globs',
    'gulp-watch',
    'harmonic',
    'harmonic-theme-default',
    'harmonic-theme-jsrocks',
    'innerator',
    'slush-es20xx',
    'traceuroso',
    'ultflow',
    'uri-path',
  ];
  const downloads = await getNpmDownloads(packages);
  const numberFormatter = new Intl.NumberFormat();

  setText({
    '#packages-count': numberFormatter.format(packages.length),
    '#downloads-count': numberFormatter.format(downloads),
  });
})();

// Display terminal animation once intro animations finish and projects section is visible.
(async () => {
  await Promise.all([delay(2400), waitVisible('.projects')]);
  initTerminal('#termynal');
})();

// Track link clicks with Google Analytics.
trackLinks(document.querySelectorAll('a'));

// Register service worker if supported and enabled.
registerServiceWorker('/sw.js');
