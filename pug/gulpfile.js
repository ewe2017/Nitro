var gulp = require('gulp');
var pug = require('gulp-pug');

/*### pug to HTML ### */

gulp.task('pug',function() {
	gulp.src('./src/*.pug')
	.pipe(pug({
		pretty:true
	}))
	.pipe(gulp.dest('./dist'))
})