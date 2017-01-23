/*
* @Author: ben_cripps
* @Date:   2015-05-18 20:58:33
* @Last Modified by:   ben_cripps
* @Last Modified time: 2016-09-06 08:10:57
*/

const Functions = require('./functions');

const funcs = new Functions();
module.exports = [
    {
        uri: '/getFakeData',
        method: 'get',
        func: funcs.getFakeData,
        vars: {}
    },
    {
        uri: '/getFakedPagedData',
        method: 'post',
        func: funcs.getFakeDataPaged,
        vars: {}
    },
    {
        uri: '/getTreeData',
        method: 'get',
        func: funcs.getTreeData,
        vars: {}
    },
    {
        uri: '/getPrefetchData',
        method: 'get',
        func: funcs.getPrefetchData,
        vars: {}
    }
];