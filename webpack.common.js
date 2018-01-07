'use strict';

const { resolve } = require('path');
const DIST_DIR = '.';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  DIST_DIR,
  IS_PRODUCTION,
  BABEL_MINIFY_PLUGIN_OPTIONS: {
    // Remove all comments.
    comments: false,
  },
  // Temporarily disabled due to bugs in minification plugins.
  // devtool: IS_PRODUCTION ? false : 'inline-source-map',
  devtool: false,
  output: {
    filename: '[name].js',
    path: resolve(__dirname, DIST_DIR),
  },
};
