var loaders = require('./loaders');

module.exports = {
    entry: [
        __dirname + '/../app/public/dev/scripts/entry-simple.js'
    ],
    output: {
        path: __dirname + '/../app/public/dev/demo/lib/',
        filename: 'bundle-simple.js',
        publicPath: 'dev/demo/lib/'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    resolve: {
        alias: {
            react: __dirname + '/../node_modules/react'
        }
    },
    module: {
        loaders: loaders
    }
};