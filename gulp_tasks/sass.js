var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cssGlobbing = require('gulp-css-globbing'),
	sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber');
	
gulp.task('sass', function () {
	gulp.src('src/scss/!(_)*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(cssGlobbing({
			extensions: ['.scss']
		}))
		.pipe(sass({
			css: 'www/assets/css',
			sass: 'src/scss/**/*',
			outputStyle: 'compressed',
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('www/assets/css/'));
});