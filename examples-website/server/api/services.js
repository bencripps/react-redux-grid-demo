/*
* @Author: ben_cripps
* @Date:   2015-05-18 20:33:19
* @Last Modified by:   ben_cripps
* @Last Modified time: 2016-05-31 20:42:41
*/

'use strict';

const routes = require('./routes');

module.exports = class Api {
    constructor(app) {
        this.app = app.server;
        this.env = app.env;
        this.initRoutes();
    }
    initRoutes() {
        routes.forEach((route) => this.app[route.method](route.uri, route.func.bind(this, route.vars)), this);
    }
};
