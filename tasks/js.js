var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    environments = require('gulp-environments'),
    concat = require('gulp-concat');

var dev = environments.development,
	prod = environments.production;

gulp.task('main-js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('global.js'))
        .pipe(gulp.dest('www/assets/js'))
        .pipe(prod(uglify()))
        .pipe(prod(rename('global.min.js')))
        .pipe(gulp.dest('www/assets/js'));
});

gulp.task('js', ['main-js', 'dirsync']);
