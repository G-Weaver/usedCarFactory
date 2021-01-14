const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(`${__dirname}/build`),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: process.env.NODE_ENV,
    devServer: {
        hot: true,
        publicPath: "/build/",
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', "css-loader"]
            }
        ]
    },
}