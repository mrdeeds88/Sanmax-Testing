var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

/* run sass */
gulp.task('sass', function () {
    return gulp.src(['src/scss/**/*.scss'])
            .pipe(sass())
            .pipe(concat('main.css'))
            .pipe(gulp.dest('src/css/'));
});