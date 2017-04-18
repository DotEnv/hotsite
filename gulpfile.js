var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

gulp.task('default', ['css', 'fonts']);

gulp.task('css', function() {

	var cssFiles = [
		'bower_components/bootstrap/dist/css/bootstrap.min.css',
		'bower_components/components-font-awesome/css/font-awesome.min.css',
		'custom.css'
	];

	var dest = 'css/';

	return gulp.src(cssFiles)
		.pipe(concat('main.css'))
		.pipe(minify())
		.pipe(gulp.dest(dest))
});

gulp.task('fonts', function() {

	var fontFiles = [
		'bower_components/bootstrap/fonts/glyphicons-*',
		'bower_components/components-font-awesome/fonts/fontawesome-*'
	];

	return gulp.src(fontFiles)
			   .pipe(gulp.dest('fonts/'))
})

gulp.task('js', function() {

	var jsFiles = [
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/bootstrap/dist/js/bootstrap.min.js'
	];

	var dest = 'js/';

	return gulp.src(cssFiles)
		.pipe(concat('main.js'))
		.pipe(gulp.dest(dest))	
});