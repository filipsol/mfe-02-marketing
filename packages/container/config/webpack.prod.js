const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN; // Set the production domain from environment variable

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js', // Cache busting for production
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'container',
        remotes: {
            marketing: `marketing@${domain}/marketing/remoteEntry.js`,
        },
        shared: packageJson.dependencies,
    })
  ]
};

module.exports = merge(commonConfig, prodConfig); // merge the common configuration with the production configuration