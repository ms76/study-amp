var gulp = require("gulp");
var jade = require("gulp-jade");
var stylus = require("gulp-stylus");
var watch = require("gulp-watch");

gulp.task('stylus', function (){
  gulp.src('./src/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./dest/'));
});

gulp.task('jade', function (){
  gulp.src('./src/*.jade')
    .pipe(jade({
      pretty: false
    }))
    .pipe(gulp.dest('./dest/'));
});

gulp.task('watch', function (){
  gulp.watch('./src/*.styl', ["stylus"]);
  gulp.watch('./src/*.jade', ["jade"]);
});

gulp.task('default', ["stylus", "jade", "watch"]);

