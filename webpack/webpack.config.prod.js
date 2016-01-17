var loaders = require('./loaders');

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
    module: {
        loaders: loaders
    }
};