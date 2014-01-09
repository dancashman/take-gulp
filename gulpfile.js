var gulp = require('gulp');
var recess = require('gulp-recess');

gulp.task('default', function () {
    gulp.src('src/app.css')
        .pipe(recess());
});
