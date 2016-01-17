/*
* @Author: ben_cripps
* @Date:   2015-05-18 22:09:30
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-11-19 20:52:05
*/

import { SchemaProvider } from '../model/provider';

export const database = {
    url: process.env.MONGOHQ_URL || 'mongodb://localhost/crippsHomepage',
    schemaProvider: new SchemaProvider(require('mongoose'))
};
