const webpack = require('webpack');
const loaders = require('./loaders');

const plugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
});

module.exports = {
    entry: [
        __dirname + '/../app/public/dev/scripts/entry.js'
    ],
    output: {
        path: __dirname + '/../app/public/dev/demo/lib/',
        filename: 'bundle.js',
        publicPath: 'dev/demo/lib/'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    plugins: [plugin],
    resolve: {
        alias: {
            react: __dirname + '/../node_modules/react'
        }
    },
    module: {
        loaders: loaders
    }
};