'use strict';
const gulp = require('gulp');

const sass = require('gulp-sass');

// Transpile sass files to css
gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('./css'));
});
