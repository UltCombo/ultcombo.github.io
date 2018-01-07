'use strict';

const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { DIST_DIR, BABEL_MINIFY_PLUGIN_OPTIONS, devtool, output } = require('./webpack.common');

module.exports = {
  entry: {
    bundle: './src/js/main.js',
    index: './src/index.html',
    main: './src/css/main.css',
    vendor: './src/css/vendor.css',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'html-loader',
            options: {
              attrs: false,
              minimize: true,
              conservativeCollapse: false,
              keepClosingSlash: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: Boolean(devtool),
            },
          },
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new BabelMinifyPlugin({}, BABEL_MINIFY_PLUGIN_OPTIONS),
    new WorkboxPlugin({
      globDirectory: DIST_DIR,
      globPatterns: ['index.html', 'bundle.js', '*.css'],
      swSrc: resolve(__dirname, 'src/js/service-worker/sw.js'),
      swDest: resolve(__dirname, DIST_DIR, 'sw.js'),
    }),
    new BrowserSyncPlugin({
      port: 8080,
      server: {
        baseDir: DIST_DIR,
      },
      reloadDebounce: 500,
      startPath: '/?disable-sw',
    }),
  ],
  devtool,
  output,
};
