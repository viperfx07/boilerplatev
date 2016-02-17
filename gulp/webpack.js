'use strict';

import path from 'path';
import webpackStream from 'webpack-stream';

export default function(gulp, plugins, args, config, taskTarget, browserSync, dirs) {
    
    let dest = path.join(taskTarget, dirs.assets, dirs.scripts.replace(/^_/, ''));
    let webpack = require('webpack');
    let webpackSettings = {
        resolve: {
            alias: {
                jquery: "../../vendor/jquery/jquery.min.js"
            }
        },
        output: {
            //path that will be considered when requiring your files
            //this is used when splitting the codes as well
            publicPath: "/assets/js/",

            //filename of the main app file
            filename: 'global.js'
        }
    };

    if(args.production){
        webpackSettings.devtool = 'source-map';
        webpackSettings.output.filename = 'global.js';
        webpackSettings.plugins = [ 
            new webpack.optimize.UglifyJsPlugin({
                minimize: true
            })
        ];
    }

    gulp.task('webpack', () => {
      return gulp.src('src/js/main.js')
        .pipe(plugins.plumber())
        .pipe(webpackStream(webpackSettings))
        .pipe(gulp.dest(dest));
    });

}

