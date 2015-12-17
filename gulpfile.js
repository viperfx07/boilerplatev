// Gulp
var gulp = require('gulp'),
	requireDir = require('require-dir'),
	tasks = requireDir('./tasks');

gulp.task('complete',['imagemin', 'iconfont', 'fonts', 'sass', 'jade', 'js', 'dirsync', 'browserSync', 'watch' ]);
gulp.task('default', ['browserSync', 'watch']);