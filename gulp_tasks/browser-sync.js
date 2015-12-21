var gulp = require('gulp'),
	browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
	browserSync.init(
		['www/assets/css/*.css',
			'www/**/*.html',
			'www/assets/img/*',
			'www/assets/js/*.js'], {
		server: {
			baseDir: 'www'
		}
	});
});
