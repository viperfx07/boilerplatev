var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	webpackStream = require('webpack-stream');

gulp.task('webpack-dev', function() {
  return gulp.src('src/js/main.js')
  	.pipe(plumber())
    .pipe(webpackStream(require('./webpack-configs/dev.config.js')))
    .pipe(gulp.dest('www/assets/js/'));
});

gulp.task('webpack-uat', function(){
	return gulp.src('src/js/main.js')
	.pipe(plumber())
    .pipe(webpackStream(require('./webpack-configs/uat.config.js')))
    .pipe(gulp.dest('www/assets/js/'));
});

gulp.task('webpack-prod', function(){
	return gulp.src('src/js/main.js')
	.pipe(plumber())
    .pipe(webpackStream(require('./webpack-configs/prod.config.js')))
    .pipe(gulp.dest('www/assets/js/'));
});

gulp.task('webpack', ['webpack-dev', 'webpack-uat', 'webpack-prod']);