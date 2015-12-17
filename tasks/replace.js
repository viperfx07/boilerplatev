var gulp = require('gulp'),
	replace = require('gulp-replace'),
	plumber = require('gulp-plumber');

gulp.task('replace', function () {
	gulp.src(['../../build/DCP/DCP.Web/Stylesheets/Corporate/style.css'])
		.pipe(replace('"', '\''))
		.pipe(replace('(\'/images/', '(\'/Images/Corporate/'))
		.pipe(replace('(\'../images/', '(\'/Images/Corporate/'))
		.pipe(gulp.dest('../../build/DCP/DCP.Web/Stylesheets/Corporate/'));
});

gulp.task('replace_path_docroot', function(){
	return gulp.src(['www/**/*.js', 'www/**/*.css', 'www/**/*.html', '!www/dependencies/**/*.*', '!www/index.html'])
		.pipe(plumber())
	    .pipe(replace(/\/dependencies/g, '/sites/all/themes/digitalnsw/assets/dependencies'))
	    .pipe(replace(/\/directives/g, '/sites/all/themes/digitalnsw/assets/directives'))
	    .pipe(replace(/\.\.\/images/g, '/sites/all/themes/digitalnsw/assets/images'))
	    .pipe(gulp.dest('docroot/sites/all/themes/digitalnsw/assets/'));
});