const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js', // Cache busting for production
    publicPath: '/dashboard/latest/', // Set the public path for production
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'dashboard',
        filename: 'remoteEntry.js',
        exposes: {
            './DashboardApp': './src/bootstrap'
        },
        shared: packageJson.dependencies,
    })
  ]
};

module.exports = merge(commonConfig, prodConfig); // merge the common configuration with the production configuration