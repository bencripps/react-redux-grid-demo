/*
* @Author: ben_cripps
* @Date:   2015-05-19 10:03:19
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-11-19 20:46:26
*/

import { Blog } from './models/blog';

export class SchemaProvider {
    constructor(mongoose) {
        this.schemas = {
            blog: new Blog(mongoose)
        };
    }
}
