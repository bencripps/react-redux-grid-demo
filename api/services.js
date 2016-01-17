/*
* @Author: ben_cripps
* @Date:   2015-05-18 20:33:19
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-11-19 21:00:00
*/

import { routes } from './routes';

export class Api {
    constructor(app) {
        this.app = app.server;
        this.env = app.env;
        this.initRoutes();
    }
    initRoutes() {
        routes.forEach((route) => this.app[route.method](route.uri, route.func.bind(this, route.vars)), this);
    }
}
