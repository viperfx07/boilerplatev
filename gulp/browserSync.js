// var gulp = require('gulp'),
// 	browserSync = require('browser-sync').create();

// gulp.task('browserSync', function () {
// 	browserSync.init(
// 		['www/assets/css/*.css',
// 			'www/**/*.html',
// 			'www/assets/img/*',
// 			'www/assets/js/*.js'], {
// 		server: {
// 			baseDir: 'www'
// 		}
// 	});
// });


'use strict';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  // BrowserSync
  gulp.task('browserSync', () => {
    browserSync.init({
      open: args.open ? 'local' : false,
      startPath: config.baseUrl,
      port: config.port || 3000,
      server: {
        baseDir: taskTarget,
        routes: (() => {
          let routes = {};

          // Map base URL to routes
          routes[config.baseUrl] = taskTarget;

          return routes;
        })()
      }
    });
  });
}
