var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	webpackStream = require('webpack-stream');

var webpack = require('webpack');
var webpackDev = {
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

var webpackUat = {
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
        filename: 'global-uat.js'
    }
};


var webpackProd = {
    resolve: {
        alias: {
            jquery: "../../vendor/jquery/jquery.min.js"
        }
    },
    devtool: "source-map",

    output: {
        //path that will be considered when requiring your files
        //this is used when splitting the codes as well
        publicPath: "/assets/js/",

        //filename of the main app file
        filename: 'global.min.js'
    },
    
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
};



gulp.task('webpack-dev', function() {
  return gulp.src('src/js/main.js')
  	.pipe(plumber())
    .pipe(webpackStream(webpackDev))
    .pipe(gulp.dest('www/assets/js/'));
});

gulp.task('webpack-uat', function(){
	return gulp.src('src/js/main.js')
	.pipe(plumber())
    .pipe(webpackStream(webpackUat))
    .pipe(gulp.dest('www/assets/js/'));
});

gulp.task('webpack-prod', function(){
	return gulp.src('src/js/main.js')
	.pipe(plumber())
    .pipe(webpackStream(webpackProd))
    .pipe(gulp.dest('www/assets/js/'));
});

gulp.task('webpack', ['webpack-dev', 'webpack-uat', 'webpack-prod']);