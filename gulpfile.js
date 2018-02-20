var dest = require('gulp-dest');
var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

gulp.task('sass', ['copy'], function () {
  return gulp.src('./src/sass/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./target/css'));
});

gulp.task('coffee', ['sass'], function() {
  gulp.src('./src/coffee/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./target/js/'));
});

gulp.task('clean', function () {
  return gulp.src('target/', {read: false})
  .pipe(clean());
});

gulp.task('concat', ['coffee'], function() {
  return gulp.src('./target/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./target/js/'));
});

gulp.task('copy', ['clean'], function() {
  // copy src data
  gulp.src(['src/**.*'])
   .pipe(dest('target/'))
   .pipe(gulp.dest('./'));
  // copy images
  gulp.src(['src/assets/**/**.*'])
  .pipe(dest('target/assets/'))
  .pipe(gulp.dest('./'));
  // copy projects files
  gulp.src(['src/projects/**.*'])
  .pipe(dest('target/projects/'))
  .pipe(gulp.dest('./'));
  // copy js files
  gulp.src(['src/js/**.*'])
   .pipe(dest('target/js/'))
   .pipe(gulp.dest('./'));
});


gulp.task('default', ['concat'], function() {
  gulp.watch('./src/**/*.*', ['copy', 'concat']);
});
