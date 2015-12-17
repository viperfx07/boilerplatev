var gulp    = require( 'gulp' ),
	dirSync = require( 'gulp-directory-sync' ),
	plumber = require( 'gulp-plumber' )
	gutil	= require( 'gulp-util' );
 
gulp.task( 'dirsync', function() {
    return gulp.src( '' )
    	.pipe(plumber())
        .pipe(dirSync( 'src/js/vendor', 'www/assets/js/vendor', { printSummary: true } ))
        .pipe(dirSync( 'src/fonts', 'www/assets/fonts', { printSummary: true } ))
        .on('error', gutil.log);
} );