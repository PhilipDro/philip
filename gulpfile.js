var dest = require('gulp-dest');
var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
// var clean = require('gulp-clean');

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./target/css'));
});

gulp.task('coffee', function() {
  gulp.src('./src/coffee/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./target/js/'));
});

// gulp.task('clean', function () {
//     return gulp.src('target/js', {read: false})
//         .pipe(clean());
// });

gulp.task('concat', function() {
  return gulp.src('./target/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./target/js/'));
});

gulp.task('copy', function() {
  gulp.src(['src/**.*'])
   .pipe(dest('target/'))
   .pipe(gulp.dest('./'));
   gulp.src(['src/images/**.*'])
    .pipe(dest('target/images/'))
    .pipe(gulp.dest('./'));
});


gulp.task('default', function() {
  gulp.watch('./src/**/*.*', ['copy', 'sass',
  //'coffee',
   'concat']);
});
