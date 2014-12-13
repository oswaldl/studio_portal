var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    del = require('del'),
    coffee = require('gulp-coffee'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin');

var paths = {
  scripts: ['app/scripts/**/*.js', 'app/scripts/*.js'],
  images: 'app/images/**/*',
  htmls: ['app/*.html'],
};

gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build'], cb);
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(coffee())
      .pipe(uglify())
      //.pipe(concat('all.min.js'))
      .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});


gulp.task('htmls', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.htmls)
    .pipe(gulp.dest('build/'));
});

// Copy all static images
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});

// Rerun the task when a file changes
//gulp.task('watch', function() {
//  gulp.watch(paths.scripts, ['scripts']);
//  gulp.watch(paths.images, ['images']);
//});

gulp.task('default', ['scripts', 'htmls', 'images']);