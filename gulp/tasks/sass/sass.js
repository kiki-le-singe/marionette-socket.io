'use strict';

// https://github.com/appleboy/gulp-sass
  // options: https://github.com/sass/node-sass
// https://www.npmjs.com/package/gulp-rename
// https://www.npmjs.com/package/gulp-minify-css
// https://github.com/wearefractal/gulp-cached

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').sass;

gulp.task('sass:dev', function () {
  return gulp.src(config.mainSassFile)
    .pipe($.sass())
    .pipe(gulp.dest(config.cssDir));
});

gulp.task('sass:dist', function () {
  return gulp.src(config.mainSassFile)
    /*.pipe(sass({
      outputStyle: 'compressed'
    }))*/
    .pipe($.sass())
    .pipe($.minifyCss())
    .pipe($.rename('main.min.css'))
    .pipe(gulp.dest(config.dist.dest));
});
