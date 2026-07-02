const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080, // specify the port for the development server
        historyApiFallback: {
            index: '/index.html' // fallback to index.html for single-page applications
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html' // specify the template for the HTML file
        })
    ]
}

module.exports = merge(commonConfig, devConfig); // merge the common configuration with the development configuration