var loaders = require('./loaders');

module.exports = {
    entry: [
        './scripts/entry.js'
    ],
    output: {
        path: __dirname + '/../demo/lib',
        filename: 'bundle.js',
        publicPath: 'dev/demo/lib/'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    module: {
        loaders: loaders
    }
};