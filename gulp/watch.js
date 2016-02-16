var gulp = require('gulp');

gulp.task('watch', function () {
	gulp.watch('src/fonts/**/*', ['dirsync']);
	gulp.watch('src/img/**/*', ['imagemin']);
	gulp.watch('src/jade/**/*.jade', ['jade'])
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['webpack']);
	gulp.watch('src/svg/**/*.svg', ['iconfont']);
	gulp.watch('src/scss/_generic_icons_template.scss', ['iconfont', 'sass']);
	gulp.watch('src/root/**/*.*', ['rootfiles']);
});

'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;

  // Watch task
  gulp.task('watch', () => {
    if (!args.production) {
      // Styles
      gulp.watch([
        path.join(dirs.source, dirs.styles, '**/*.{scss,sass}'),
        path.join(dirs.source, dirs.modules, '**/*.{scss,sass}')
      ], ['sass']);

      // Jade Templates
      gulp.watch([
        path.join(dirs.source, '**/*.jade'),
        path.join(dirs.source, dirs.data, '**/*.json')
      ], ['jade']);

      // Copy
      gulp.watch([
        path.join(dirs.source, '**/*'),
        '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}'),
        '!' + path.join(dirs.source, '**/*.jade')
      ], ['copy']);

      // Images
      gulp.watch([
        path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
      ], ['imagemin']);

      // Icons
      gulp.watch([
        path.join(dirs.source, dirs.icons, '**/*.{svg}')
      ], ['iconfont']);

      // All other files
      gulp.watch([
        path.join(dirs.temporary, '**/*'),
        '!' + path.join(dirs.temporary, '**/*.{css,map,html,js}')
      ]).on('change', browserSync.reload);
    }
  });
}
