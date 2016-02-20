'use strict';

import path from 'path';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

export default function(gulp, plugins, args, config, taskTarget, browserSync, dirs) {
    
    let dest = path.join(taskTarget, dirs.assets, dirs.scripts.replace(/^_/, ''));
    let webpackSettings = {
        output: {
            //path that will be considered when requiring your files
            //this is used when splitting the codes as well
            publicPath: "/assets/js/",

            //filename of the main app file
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader"},
            ]
        }
    };


    if(args.production){
        webpackSettings.devtool = 'source-map';
        webpackSettings.output.filename = 'bundle.js';
        webpackSettings.plugins = [ 
            new webpack.optimize.UglifyJsPlugin({
                minimize: true
            })
        ];
    }

    gulp.task('webpack', () => {
      return gulp.src(path.join(dirs.source, dirs.scripts, 'main.js'))
        .pipe(plugins.plumber())
        .pipe(webpackStream(webpackSettings))
        .pipe(gulp.dest(dest));
    });

}

