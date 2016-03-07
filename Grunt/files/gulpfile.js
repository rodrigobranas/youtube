var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglifyjs');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');
var del = require('del');
var es = require('event-stream');
var runSequence = require('run-sequence');

gulp.task('clean', function() {
	return del(['dist/']);
});

gulp.task('uglify', function () {
	return es.merge([
		gulp.src('bower_components/angular/angular.min.js'),
		gulp.src('bower_components/angular-messages/angular-messages.min.js'),
		gulp.src('bower_components/angular-route/angular-route.min.js'),
		gulp.src('js/**/*.js').pipe(uglify()),
		gulp.src('lib/**/*.js').pipe(uglify())
	])
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('clean-css', function () {
	return es.merge([
		gulp.src('bower_components/bootstrap/dist/css/bootstrap.css'),
		gulp.src('css/**/*.css')
	])
	.pipe(cleanCSS())
	.pipe(concat('styles.min.css'))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('htmlmin', function() {
  return gulp.src('view/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/view'))
});

gulp.task('copy', function () {
	return gulp.src('index-prod.html')
	.pipe(rename('index.html'))
	.pipe(gulp.dest('dist/'));
});

gulp.task('prod', function (callback) {
	return runSequence('clean', 'uglify', 'clean-css', 'htmlmin', 'copy', callback);
});