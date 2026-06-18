module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // test for .js or .mjs files
                exclude: /node_modules/, // exclude node_modules
                use: {
                    loader: 'babel-loader', // use babel-loader to transpile JavaScript files
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'], // use presets for React and modern JavaScript features
                        plugins: ['@babel/plugin-transform-runtime'] // use plugin to optimize helper code
                    }
                }
            }
        ]
    },
}