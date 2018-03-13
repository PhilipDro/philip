var dest = require('gulp-dest');
var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', ['copy'], function() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('target/'));
});

gulp.task('minify-css', ['sass'], function() {
  return gulp.src('target/css/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
    }))
    .pipe(gulp.dest('target/css/'));
});

gulp.task('autoprefixer', ['minify-css'], function() {
  gulp.src('target/css/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('target/css/'))
});

gulp.task('sass', ['minify'], function () {
  return gulp.src('./src/sass/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./target/css'));
});

gulp.task('coffee', ['autoprefixer'], function() {
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

gulp.task('imagemin', ['clean'], function () {
    gulp.src('src/assets/images/**/**.*')
        .pipe(imagemin())
        .pipe(gulp.dest('target/assets/images'))
});

gulp.task('copy', ['imagemin'], function() {
  // copy normalize.class
  gulp.src(['node_modules/normalize.css/normalize.css'])
  .pipe(dest('target/css/'))
  .pipe(gulp.dest('./'));
  // copy src data
  gulp.src(['src/**.*'])
   .pipe(dest('target/'))
   .pipe(gulp.dest('./'));
  // // minimize images
  // gulp.src('src/assets/images/**/**.*')
  //   .pipe(imagemin())
  //   .pipe(gulp.dest('target/assets/images'))
  // copy assets videos
  gulp.src(['src/assets/videos/**.*'])
  .pipe(dest('target/assets/videos'))
  .pipe(gulp.dest('./'));
  // copy assets documents
  gulp.src(['src/assets/documents/**.*'])
  .pipe(dest('target/assets/documents'))
  .pipe(gulp.dest('./'));
  //copy projects files
  gulp.src(['src/projects/**.*'])
  .pipe(dest('target/projects/'))
  .pipe(gulp.dest('./'));
  // copy js files
  gulp.src(['src/js/**.*'])
   .pipe(dest('target/js/'))
   .pipe(gulp.dest('./'));
});


gulp.task('default', ['concat'], function() {
  gulp.watch('./src/**/*.*', ['concat']);
});
