/*
* @Author: ben_cripps
* @Date:   2015-05-18 19:34:42
* @Last Modified by:   ben_cripps
* @Last Modified time: 2016-08-07 07:54:07
*/

'use strict';

const path = require('path');
const Helper = require('./helpers.js');

module.exports = class App {

    constructor(args) {
        this.env = args.length === 3 && args[2] === 'dev' ? args[2] : 'min';
        this.server = this.init(
                        require('express'),
                        require('body-parser'),
                        require('serve-favicon')
                      );
    }

    init(express, bodyParser, favicon) {

        const app = express()
            .set('port', process.env.PORT || 3001)
            .set('views', path.join(__dirname, '/../views'))
            .set('view engine', 'jade')
            .use(express.static('app/public'))
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({extended: true}));

        app.helper = new Helper();

        return app;
    }

}