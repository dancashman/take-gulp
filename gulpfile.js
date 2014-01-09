var gulp = require('gulp');
var recess = require('gulp-recess');
var browserify = require('gulpify');

gulp.task('bundle', function() {
  gulp.src('./app/js/main.js')
    .pipe(browserify('bundle.js'))
    .pipe(gulp.dest('app/js/'));
});

gulp.task('js', function () {
    gulp.run('bundle');
});

gulp.task('default', function () {
    gulp.src('src/app.css')
        .pipe(recess());
});
