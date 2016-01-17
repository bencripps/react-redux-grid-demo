/*
* @Author: ben_cripps
* @Date:   2015-05-23 13:12:36
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-12-05 10:39:49
*/

var helpers = require('./gulp/helpers.js');

var dirs = {
    scripts: {
        dev: 'dev/scripts/**/*.js'.toPath(),
        min: 'min/scripts/'.toPath()
    },
    styles: {
        dev: 'dev/style/main.scss'.toPath(),
        min: 'min/style/'.toPath(),
        watch: 'dev/style/**/*.scss'.toPath()

    },
    images: {
        dev: 'dev/images/*'.toPath(),
        min: 'min/images/'.toPath()
    }
};

var gulp = require('gulp');

var tasks = require('./gulp/tasks.js')(gulp, dirs);

Object.keys(tasks).forEach(function(tsk){
    gulp.task(tsk, tasks[tsk].deps, tasks[tsk].fn);
});