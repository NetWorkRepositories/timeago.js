const fs = require('fs');
const gulp = require('gulp');
const wrap = require('gulp-wrap');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");

gulp.task('mini', () => (
  gulp.src('src/timeago.js')
  .pipe(wrap({src: 'src/exports.js'}))
  .pipe(rename("timeago.js"))
  .pipe(gulp.dest('dist/'))
  .pipe(uglify())    //uglify
  .pipe(rename("timeago.min.js"))
  .pipe(gulp.dest('dist/'))
));