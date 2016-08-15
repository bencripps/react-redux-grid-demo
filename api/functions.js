'use strict';

const dataObj = require('../config/fakedata');

module.exports = class Functions {
    constructor() {

    }

    idx(vars, req, res) {
        res.render(vars.routeName, this.app.helper.template({env: this.env, vars: vars}));
    }

    getFakeData(vars, req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({
            data: dataObj.data.slice(0, 20),
            total: dataObj.data.length
        });
        // res.json({
        //     data: data
        // });
    }

     getTreeData(vars, req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({
            data: dataObj.treeData
        });
    }

    getFakeDataPaged(vars, req, res) {
        const json = JSON.parse(Object.keys(req.body)[0]);
        const pageIndex = json.pageIndex;
        const pageSize = json.pageSize;
        const total = dataObj.data.length;
        const pages = dataObj.data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({
            data: pages,
            total: total
        });
    }

};