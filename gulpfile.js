// Gulp
var gulp = require('gulp'),
	requireDir = require('require-dir'),
	tasks = requireDir('./gulp_tasks');

gulp.task('complete',['bower', 'imagemin', 'iconfont', 'fonts', 'sass', 'jade', 'webpack', 'dirsync', 'rootfiles', 'browserSync', 'watch' ]);
gulp.task('default', ['browserSync', 'watch']);