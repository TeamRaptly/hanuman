// script to enable webpack-bundle-analyzer
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpackConfigServer = require('../webpack.server');

// Server bundle
webpackConfigServer.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerPort: 9998
  })
);

// actually running compilation and waiting for plugin to start explorer
webpack(webpackConfigServer, (err, stats) => {
  if (err || stats.hasErrors()) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
});
