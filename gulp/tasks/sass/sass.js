'use strict';

// https://github.com/appleboy/gulp-sass
  // options: https://github.com/sass/node-sass
// https://www.npmjs.com/package/gulp-rename
// https://www.npmjs.com/package/gulp-minify-css

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').sass;
var merge = require('merge-stream');

gulp.task('sass:dev', function () {
  return gulp.src(config.mainSassFile)
    .pipe($.sass())
    .pipe(gulp.dest(config.cssDir));
});

gulp.task('sass:dist', function () {
  var sass = gulp.src(config.mainSassFile).pipe($.sass());
  var cssFramework = gulp.src(config.cssFramework);

  return merge(cssFramework, sass)
    .pipe($.concat('main.min.css'))
    .pipe($.minifyCss())
    .pipe(gulp.dest(config.dist.dest));
});
