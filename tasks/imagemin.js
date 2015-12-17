var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	plumber = require('gulp-plumber');
	
gulp.task('imagemin', function () {
	return gulp.src('src/img/**/*')
		.pipe(plumber())
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}]
		}))
		.pipe(gulp.dest('www/assets/img/'));
});