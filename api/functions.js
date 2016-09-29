'use strict';

const dataObj = require('../config/fakedata');
const url = require('url');

module.exports = class Functions {
    constructor() {

    }

    idx(vars, req, res) {
        res.render(vars.routeName, this.app.helper.template({env: this.env, vars: vars}));
    }

    getFakeData(vars, req, res) {
        const reqURL = url.parse(req.url, true);
        const json = reqURL.query;

        res.setHeader('Access-Control-Allow-Origin', '*');

        const pageIndex = Number(json.pageIndex !== undefined ? json.pageIndex : 0);
        const pageSize = Number(json.pageSize || 20);

        const total = dataObj.data.length;
        const pages = dataObj.data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

        res.json({
            data: pages,
            total: total
        });
    }

    getPrefetchData(vars, req, res) {
        const reqURL = url.parse(req.url, true);
        const json = reqURL.query;

        const pageIndex = json.pageIndex !== undefined ? json.pageIndex : 0;
        const pageSize = json.pageSize || 25;
        const total = dataObj.data.length;
        const pages = dataObj.data.slice(pageIndex * (pageSize * 2), ((pageIndex) + 1) * (pageSize * 2));

        res.setHeader('Access-Control-Allow-Origin', '*');

        res.json({
            data: pages,
            total: total
        });
    }

    getTreeData(vars, req, res) {

        const reqURL = url.parse(req.url, true);
        const json = reqURL.query;

        res.setHeader('Access-Control-Allow-Origin', '*');

        if (json && json.parentId) {
            res.json({
                partial: true,
                data: [
                    {
                        id: 211,
                        parentId: 21,
                        Name: 'Category 211',
                        GUID: '8f7q2dc-facf-91865',
                        Email: 'hehehe@ed.gov',
                        Gender: 'Male',
                        Address: '21112 Park',
                        'Phone Number': '31-(678)495-4134'
                    },
                    {
                        id: 212,
                        parentId: 21,
                        Name: 'Category 212',
                        GUID: 'q2dc-facf-527fcsw-jdjd991865',
                        Email: 'hehehe@ed.gov',
                        Gender: 'Male',
                        Address: '21112 Park',
                        'Phone Number': '31-(678)495-4134',
                        children: [
                            {
                                id: 2121,
                                parentId: 212,
                                Name: 'Category 2121',
                                GUID: 'q2dc-facf-527fcsw-sss865',
                                Email: 'hehehe@ed.gov',
                                Gender: 'Male',
                                Address: '21112 Park',
                                'Phone Number': '31-(678)495-4134'
                            }
                        ]
                    }
                ]
            });
        }

        else {
            res.json({
                data: dataObj.treeData
            });
        }

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