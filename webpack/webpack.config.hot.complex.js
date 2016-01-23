var loaders = require('./loaders');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        __dirname + '/../app/public/dev/scripts/entry-complex.js'
    ],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    output: {
        path: __dirname + 'app/public/dev/demo/lib',
        filename: 'bundle-complex.js',
        sourceMapFilename: 'debugging/[file].map',
        publicPath: 'http://localhost:8080/demo/lib/',
        crossOriginLoading: 'use-credentials'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    module: {
        eslint: {
            configFile: '.eslintrc',
            emitError: true,
            failOnError: true,
            failOnWarning: false
        },
        loaders: loaders
    },
    resolve: {
        alias: {
            react: __dirname + '/../node_modules/react'
        }
    },
    devtool: 'inline-source-map'
};