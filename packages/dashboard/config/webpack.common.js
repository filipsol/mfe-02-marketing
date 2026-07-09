const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/index.js', // entry point for the application
    output: {
        filename: '[name].[contenthash].js', // output filename
    },
    resolve: {
        extensions: ['.js', '.vue'], // resolve .js and .vue files without specifying extensions
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i, // test for image and font files
                use: [
                    { loader: 'file-loader' }
                ] // use file-loader to handle these files
            },
            {
                test: /\.vue$/, // test for .vue files
                use: 'vue-loader' // use vue-loader to handle Vue single-file components
            },
            {
                test: /\.(scss|css)$/, // test for .scss and .css files
                use: [
                    'vue-style-loader', // inject CSS into the DOM for Vue components
                    'style-loader', // inject CSS into the DOM
                    'css-loader', // interpret @import and url() like import/require()
                    'sass-loader' // compile Sass to CSS
                ]
            },
            {
                test: /\.m?js$/, // test for .js or .mjs files
                exclude: /node_modules/, // exclude node_modules
                use: {
                    loader: 'babel-loader', // use babel-loader to transpile JavaScript files
                    options: {
                        presets: ['@babel/preset-env'], // use presets for React and modern JavaScript features
                        plugins: ['@babel/plugin-transform-runtime'] // use plugin to optimize helper code
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}