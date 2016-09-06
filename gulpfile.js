var gulp = require('gulp'),
    cleanCSS          = require('gulp-clean-css'),
    rename            = require("gulp-rename"),
    uglify            = require('gulp-uglify'),
    sass              = require('gulp-sass'),
    del               = require('del'),
    browserSync       = require('browser-sync').create(),
    postcss           = require('gulp-postcss'),
    autoprefixer      = require('autoprefixer'),
    colorRgbaFallback = require("postcss-color-rgba-fallback");

// Minimum js file
gulp.task('uglify', function() {
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(rename(function(path) {
    path.basename += ".min";
    path.extname = ".js";
  }))
  .pipe(gulp.dest('dist/js/'))
  .pipe(browserSync.stream());
});

// Write SASS file
gulp.task('sass', function(){
    var processors = [
    autoprefixer,
    colorRgbaFallback
  ];
  gulp.src('src/sass/*.scss')
  .pipe(sass())
  .pipe(postcss(processors))
  .pipe(gulp.dest("src/css/"))
  .pipe(cleanCSS())
  .pipe(rename(function(path) {
    path.basename += ".min";
    path.extname = ".css";
  }))
  .pipe(gulp.dest('dist/css/'))
  .pipe(browserSync.stream());
});

// Clean file
gulp.task('clean', function(cb) {
  del(['dist/js/', 'dist/css/'], cb)
});

// Build file
gulp.task('build', ['sass','uglify'], function() {
});

// Watch file
gulp.task('watch', function() {
  browserSync.init({
    server: {
        baseDir: "",
    },
    reloadDelay: 500
  });
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("app/*.js").on('change', browserSync.reload);
  gulp.watch("app/controllers/*.js").on('change', browserSync.reload);
  gulp.watch("app/filter/*.js").on('change', browserSync.reload);
  gulp.watch('src/sass/*.scss',['sass']);
  gulp.watch('src/js/*.js',['uglify']);
});

// Gulp
gulp.task('default', ['watch', 'build']);
