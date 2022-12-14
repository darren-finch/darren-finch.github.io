const common = require('./webpack.common')
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
    },
});