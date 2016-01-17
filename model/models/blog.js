/*
* @Author: ben_cripps
* @Date:   2015-01-08 20:07:34
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-11-19 20:48:40
*/

import { Model } from '../base';

export class Blog extends Model {
    constructor(mongoose) {
        super(mongoose, 'blog', {
            title: String,
            postContent: String,
            date: String,
            time: String,
            queryID: String
        });
    }
}
