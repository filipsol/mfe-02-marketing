const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const packageJson = require('../package.json'); // import package.json to access dependencies

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080, // specify the port for the development server
        historyApiFallback: {
            index: '/index.html' // fallback to index.html for single-page applications
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            // shared: ['react', 'react-dom'] // share react and react-dom as singletons to avoid multiple versions
            shared: packageJson.dependencies // share all dependencies from package.json to avoid multiple versions
        })
    ]
}

module.exports = merge(commonConfig, devConfig); // merge the common configuration with the development configuration