// var gulp = require('gulp'),
// 	sass = require('gulp-sass'),
// 	cssGlobbing = require('gulp-css-globbing'),
// 	sourcemaps = require('gulp-sourcemaps'),
// 	plumber = require('gulp-plumber');
	
// gulp.task('sass', function () {
// 	gulp.src('src/scss/!(_)*.scss')
// 		.pipe(plumber())
// 		.pipe(sourcemaps.init())
// 		.pipe(cssGlobbing({
// 			extensions: ['.scss']
// 		}))
// 		.pipe(sass({
// 			css: 'www/assets/css',
// 			sass: 'src/scss/**/*',
// 			outputStyle: 'compressed',
// 		}))
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(gulp.dest('www/assets/css/'));
// });

'use strict';

import path from 'path';
import autoprefixer from 'autoprefixer';
import gulpif from 'gulp-if';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let entries = config.entries;
  let dest = path.join(taskTarget, dirs.assets, dirs.styles.replace(/^_/, ''));

  // Sass compilation
  gulp.task('sass', () => {
    gulp.src(path.join(dirs.source, dirs.styles, entries.css))
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.cssGlobbing({
			extensions: ['.scss']
		}))
      .pipe(plugins.sass({
      	// css: 'www/assets/css',
		// sass: 'src/scss/**/*',
        outputStyle: 'compressed',
        precision: 10,
        includePaths: [
          path.join(dirs.source, dirs.styles),
          path.join(dirs.source, dirs.modules)
        ]
      }).on('error', plugins.sass.logError))
      .pipe(plugins.postcss([autoprefixer({browsers: ['last 2 version', '> 5%', 'safari 5', 'ios 6', 'android 4']})]))
      .pipe(plugins.rename(function(path) {
        // Remove 'source' directory as well as prefixed folder underscores
        // Ex: 'src/_styles' --> '/styles'
        path.dirname = path.dirname.replace(dirs.source, '').replace('_', '');
      }))
      .pipe(gulpif(args.production, plugins.cssnano({rebase: false})))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream({match: '**/*.css'}));
  });
}