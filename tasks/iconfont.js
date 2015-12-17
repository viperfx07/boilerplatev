var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var runTimestamp = Math.round(Date.now()/1000);

//icon font settings
var iconFontSettings ={
  fontName: 'icons', // the font-family named used in the css
  fontPath: '../fonts/', //relative path to the fonts file
  className: 'icon' //associated with 'className' variable in template. will be the class name used in the css
}

gulp.task('iconfont', function(){
  return gulp.src(['src/svg/*.svg'])
    .pipe(plumber())
    .pipe(iconfont({
      fontName: iconFontSettings.fontName, // required 
      // appendUnicode: true, // recommended option 
      formats: ['ttf', 'eot', 'woff', 'svg'], // default, 'woff2' and 'svg' are available 
      timestamp: runTimestamp, // recommended to get consistent builds when watching files 

      //If some font glyphs aren't converted properly you should append the normalize:true option and a fontHeight greater than 1000 (fontHeight: 1001).
      normalize: true, 
      fontHeight: 1001 
    }))
    .on('glyphs', function(glyphs, options) {
      gulp.src('src/scss/_generic_icons_template.scss')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: iconFontSettings.fontName,
          fontPath: iconFontSettings.fontPath,
          className: iconFontSettings.className
        }))
        .pipe(rename('_generic.icons.scss'))
        .pipe(gulp.dest('src/scss/03_generic/'))
    })
    .pipe(gulp.dest('www/assets/fonts/'));
});