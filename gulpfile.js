var gulp = require('gulp');
var recess = require('gulp-recess');
// var browserify = require('gulpify');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');


gulp.task('bundle', function() {
    //single entry point to browserify
    gulp.src(['app/js/main.js'])
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        .pipe(gulp.dest('app/js/'));
});

gulp.task('js', function () {
    gulp.run('bundle');
});

gulp.task('default', function () {
    gulp.src('src/app.css')
        .pipe(recess());
});
