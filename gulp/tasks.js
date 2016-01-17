/*
* @Author: ben_cripps
* @Date:   2015-05-23 13:13:43
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-11-19 20:50:51
*/
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

module.exports = function(gulp, dirs) {

    var tasks = {

        default: {
            fn: function() {},
            deps: ['minImages', 'minify']
        },

        minify: {
            fn: function() {
                return gulp.src(dirs.scripts.dev)
                    .pipe(uglify())
                    .pipe(gulp.dest(dirs.scripts.min));
            },
            deps: ['cleanScripts', 'sass']
        },

        minImages: {
            fn: function() {
                return gulp.src(dirs.images.dev)
                    .pipe(imagemin({
                        progressive: true,
                        svgoPlugins: [{removeViewBox: false}],
                        use: [pngquant()]
                    }))
                    .pipe(gulp.dest(dirs.images.min));
            },
            deps: ['cleanImages']
        },

        watchSass: {
            fn: function() {
                return gulp.watch(dirs.styles.watch, ['sass']);
            },
            deps: []
        },

        sass: {
            fn: function() {
                return gulp.src(dirs.styles.dev)
                    .pipe(sass({outputStyle: 'compressed'}))
                    .pipe(gulp.dest(dirs.styles.min));
            },
            deps: []
        },

        cleanImages: {
            fn: function() {
                return gulp.src(dirs.images.min, {read: false})
                    .pipe(clean());
            },
            deps: []
        },

        cleanStyles: {
            fn: function() {
                return gulp.src(dirs.styles.min, {read: false})
                    .pipe(clean());
            },
            deps: []
        },

        cleanScripts: {
            fn: function() {
                return gulp.src(dirs.scripts.min, {read: false})
                    .pipe(clean({force: true}));
            },
            deps: []
        }
    };

    return tasks;
};
