const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json'); // import package.json to access dependencies

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/', // set the public path for development
    },
    devServer: {
        port: 8082, // specify the port for the development server
        historyApiFallback: {
            index: '/index.html' // fallback to index.html for single-page applications
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap'
            },
            // shared: ['react', 'react-dom'] // share react and react-dom as singletons to avoid multiple versions
            shared: packageJson.dependencies  // share all dependencies from package.json to avoid multiple versions
        })
    ]
}

module.exports = merge(commonConfig, devConfig); // merge the common configuration with the development configuration