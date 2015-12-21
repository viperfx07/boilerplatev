var	gulp = require('gulp'),                                                                                                                                    
jade     = require('gulp-jade'),                                 
gutil    = require('gulp-util'),                                 
plumber  = require('gulp-plumber');
	
gulp.task('jade', function () {
	var store = {};

	return gulp.src('src/jade/**/!(_)*.jade')
		.pipe(plumber())
		.pipe(jade({
			basedir: 'src/jade/',
			locals: store,
			pretty: true
		}))
		.pipe(gulp.dest('www/'))
		.on('error', gutil.log);
});