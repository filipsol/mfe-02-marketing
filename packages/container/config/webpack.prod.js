const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

// Normalize production domain and avoid generating "undefined/..." URLs in CI builds.
const rawDomain = process.env.PRODUCTION_DOMAIN || '';
const normalizedDomain = rawDomain.replace(/\/$/, '');
const marketingRemoteUrl = normalizedDomain
  ? `${normalizedDomain}/marketing/latest/remoteEntry.js`
  : '/marketing/latest/remoteEntry.js';

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js', // Cache busting for production
    publicPath: '/container/latest/', // Set the public path for production
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'container',
        remotes: {
            marketing: `marketing@${marketingRemoteUrl}`,
        },
        shared: packageJson.dependencies,
    })
  ]
};

module.exports = merge(commonConfig, prodConfig); // merge the common configuration with the production configuration