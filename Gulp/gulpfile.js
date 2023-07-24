const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function styles() {
  return gulp
    .src('./app.css') 
    .pipe(sass()) 
    .pipe(concat('all.min.css')) 
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
}

exports.default = gulp.series(styles);
