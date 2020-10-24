// script to enable webpack-bundle-analyzer
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpackConfigClient = require('../webpack.client');

// Client bundle
webpackConfigClient.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerPort: 9999,
    openAnalyzer: true
  })
);

// actually running compilation and waiting for plugin to start explorer
webpack(webpackConfigClient, (err, stats) => {
  if (err || stats.hasErrors()) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
});
