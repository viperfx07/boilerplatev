var gulp = require('gulp');

gulp.task('watch', function () {
	gulp.watch('src/img/**/*', ['imagemin']);
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/jade/**/*.jade', ['jade']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/fonts/**/*', ['dirsync']);
	gulp.watch('src/svg/**/*.svg', ['iconfont']);
});