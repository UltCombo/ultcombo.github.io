'use strict';

const StringReplacePlugin = require('string-replace-webpack-plugin');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const { IS_PRODUCTION, BABEL_MINIFY_PLUGIN_OPTIONS, devtool, output } = require('./webpack.common');

module.exports = {
  entry: {
    sw: './sw.js',
  },
  module: {
    loaders: IS_PRODUCTION
      ? [
          {
            test: /sw\.js$/,
            loader: StringReplacePlugin.replace({
              replacements: [
                {
                  pattern: /\.dev\./g,
                  replacement: () => '.prod.',
                },
              ],
            }),
          },
        ]
      : [],
  },
  plugins: [new StringReplacePlugin(), new BabelMinifyPlugin({}, BABEL_MINIFY_PLUGIN_OPTIONS)],
  devtool,
  output,
};
