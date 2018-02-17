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
  gulp.src(['src/**.*'])
   .pipe(dest('target/'))
   .pipe(gulp.dest('./'));
   gulp.src(['src/images/**/**.*'])
    .pipe(dest('target/images/'))
    .pipe(gulp.dest('./'));
   gulp.src(['src/projects/**.*'])
    .pipe(dest('target/projects/'))
    .pipe(gulp.dest('./'));
});


gulp.task('default', ['sass', 'coffee', 'concat'], function() {
  gulp.watch('./src/**/*.*', ['copy', 'concat']);
});
