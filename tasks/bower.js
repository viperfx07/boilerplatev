var gulp = require('gulp'),
	exec = require('child_process').exec;

gulp.task('bower-install', function(cb){
	exec('bower install' , function(err, stdout, stderr){
		console.log(stdout);
		console.log(stderr);
	});
});


gulp.task('bower-installer', function(cb){
	exec('bower-installer' , function(err, stdout, stderr){
		console.log(stdout);
		console.log(stderr);
	});
});

gulp.task('bower', ['bower-install', 'bower-installer']);