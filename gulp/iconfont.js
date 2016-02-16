'use strict';

import path from 'path';
import lodash from 'lodash';

export default function(gulp, plugins, args, config, taskTarget, browserSync){
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.fonts.replace(/^_/, ''));
  let runTimestamp = Math.round(Date.now()/1000);

  //icon font settings
  let iconFontSettings ={
    fontName: 'icons', // the font-family named used in the css
    fontPath: '../fonts/', //relative path to the fonts file
    className: 'v-icon' //associated with 'className' variable in template. will be the class name used in the css
  };

  gulp.task('iconfont', function(){
    return gulp.src(path.join(dirs.source, dirs.icons, '**/*.{svg}'))
      .pipe(plugins.plumber())
      .pipe(plugins.iconfont({
        fontName: iconFontSettings.fontName, // required 
        // appendUnicode: true, // recommended option 
        formats: ['ttf', 'eot', 'woff', 'svg'], // default, 'woff2' and 'svg' are available 
        timestamp: runTimestamp, // recommended to get consistent builds when watching files 

        //If some font glyphs aren't converted properly you should append the normalize:true option and a fontHeight greater than 1000 (fontHeight: 1001).
        normalize: true, 
        fontHeight: 1001 
      }))
      .on('glyphs', function(glyphs, options) {
        gulp.src(path.join(dirs.source, dirs.css, '_generic_icons_template.scss'))
          .pipe(plugins.consolidate('lodash', {
            glyphs: glyphs,
            fontName: iconFontSettings.fontName,
            fontPath: iconFontSettings.fontPath,
            className: iconFontSettings.className
          }))
          .pipe(plugins.rename('_generic.icons.scss'))
          .pipe(gulp.dest(path.join(dirs.source, dirs.css, '03_generic')))
      })
      .pipe(gulp.dest(dest));
  });
}