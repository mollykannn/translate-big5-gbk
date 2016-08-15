var gulp = require('gulp'),
    minifyCSS  = require('gulp-minify-css'),
    rename     = require("gulp-rename"),
    uglify     = require('gulp-uglify'),
    sass       = require('gulp-sass'),
    del        = require('del'),
    browserSync = require('browser-sync').create();

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var colorRgbaFallback = require("postcss-color-rgba-fallback");

// Minimum js file
gulp.task('uglify', function() {
  gulp.src('html/src/js/*.js')
  .pipe(uglify())
  .pipe(rename(function(path) {
    path.basename += ".min";
    path.extname = ".js";
  }))
  .pipe(gulp.dest('html/dist/js/'))
  .pipe(browserSync.stream());
});

// Write SASS file
gulp.task('sass', function(){
    var processors = [
    autoprefixer,
    colorRgbaFallback
  ];
  gulp.src('html/src/sass/*.scss')
  .pipe(sass())
  .pipe(postcss(processors))
  .pipe(gulp.dest("html/src/css/"))
  .pipe(minifyCSS({
    keepBreaks: true,
  }))
  .pipe(rename(function(path) {
    path.basename += ".min";
    path.extname = ".css";
  }))
  .pipe(gulp.dest('html/dist/css/'))
  .pipe(browserSync.stream());
});

// Clean file
gulp.task('clean', function(cb) {
  del(['html/dist/js/', 'html/dist/css/'], cb)
});

// Build file
gulp.task('build', ['sass','uglify'], function() {
});

// Watch file
gulp.task('watch', ['sass','uglify'], function() {
  browserSync.init({
    server: {
        baseDir: "./html",
    },
    port: 2000
  });
  gulp.watch("html/*.html").on('change', browserSync.reload);
  gulp.watch('html/src/sass/*.scss',['sass']).on('change', browserSync.reload);
  gulp.watch('html/src/js/*.js',['uglify']).on('change', browserSync.reload);
});

// Gulp
gulp.task('default', ['watch']);
