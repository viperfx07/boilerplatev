var gulp = require('gulp'),
	plumber = require('gulp-plumber');
	
gulp.task('fonts', function () {
	return gulp.src('src/fonts/**/*')
		.pipe(plumber())
		.pipe(gulp.dest('www/assets/fonts/'));
});