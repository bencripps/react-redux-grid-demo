/*
* @Author: ben_cripps
* @Date:   2015-01-08 20:07:34
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-12-05 10:40:39
*/
export class Model {
    constructor(mongoose, name, model) {
        this.model = mongoose.model(name, model);
    }
}
