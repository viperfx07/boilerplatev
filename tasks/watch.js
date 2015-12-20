var gulp = require('gulp');

gulp.task('watch', function () {
	gulp.watch('src/fonts/**/*', ['dirsync']);
	gulp.watch('src/img/**/*', ['imagemin']);
	gulp.watch('src/jade/**/*.jade', ['jade'])
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/svg/**/*.svg', ['iconfont']);
	gulp.watch('src/scss/_generic_icons_template.scss', ['iconfont', 'sass']);
});