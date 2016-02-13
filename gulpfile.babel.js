'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSyncLib from 'browser-sync';
import pjson from './package.json';
import minimist from 'minimist';
import wrench from 'wrench';
import requireDir from 'require-dir';

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
const plugins = gulpLoadPlugins();

let config = pjson.config;
let args = minimist(process.argv.slice(2));
let dirs = config.directories;
let taskTarget = args.production ? dirs.destination : dirs.temporary;

// Gulp
let	tasks = requireDir('./gulp_tasks');

gulp.task('complete',['bower', 'imagemin', 'iconfont', 'fonts', 'sass', 'jade', 'webpack', 'dirsync', 'rootfiles', 'browserSync', 'watch' ]);
gulp.task('default', ['browserSync', 'watch']);