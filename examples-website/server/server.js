/*
* @Author: ben_cripps
* @Date:   2014-12-01 10:10:44
* @Last Modified by:   ben_cripps
* @Last Modified time: 2016-05-31 20:38:50
*/

const App = require('./config/init');
const Api = require('./api/services');

const app = new App(process.argv);
const api = new Api(app);

app.server.listen(app.server.get('port'), () => {
    console.log('This app is running in ' +
        (app.env === 'dev' ? app.env : 'prod') +
        ' mode, on port ' + app.server.get('port'));
});

