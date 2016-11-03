'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');



gulp.task('sass', function () {
	if (process.env.NODE_ENV === 'production') {
		return gulp.src('./assets/scss/app.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(sourcemaps.init())
			.pipe(cleanCSS({ compatibility: 'ie8' }))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('./src/dist/css'));
	} else {
		return gulp.src('./assets/scss/app.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(gulp.dest('./src/dist/css'));
	}
});

gulp.task('env:dev', function () {
	process.env.NODE_ENV = 'development';
});

gulp.task('env:prod', function () {
	process.env.NODE_ENV = 'production';
});

gulp.task('sass:watch', function () {
	gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('scripts', function () {
	if (process.env.NODE_ENV === 'production') {
		return gulp.src(['./assets/scripts/**/*.js'])
			.pipe(concat('all.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./src/dist/js'));
	} else {
		return gulp.src(['./assets/scripts/**/*.js'])
			.pipe(concat('all.js'))
			.pipe(gulp.dest('./src/dist/js'));
	}

});

gulp.task('scripts:watch', function () {
	gulp.watch('./assets/scripts/**/*.js', ['scripts']);
});

gulp.task('watch', ['sass:watch', 'scripts:watch'], function () {
});


gulp.task('default', function (done) {
	runSequence('env:dev', ['sass', 'scripts'], 'watch', done);
});

gulp.task('prod', function (done) {
	runSequence('env:prod', ['sass', 'scripts'], 'watch', done);
});