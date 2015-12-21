var gulp = require('gulp');

gulp.task('rootfiles', function(){
	return gulp.src('src/root/**/*.*')
			.pipe(gulp.dest('www/'));
});