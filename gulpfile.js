const gulp = require('gulp'),
      babel = require('gulp-babel'),
      sass = require('gulp-sass'),
      minifycss = require('gulp-clean-css'),
      rename = require('gulp-rename'),
      handlebars = require('gulp-handlebars'),
      wrap = require('gulp-wrap'),
      declare = require('gulp-declare'),
      concat = require('gulp-concat'),
      util = require('gulp-util'),
      log = util.log;


gulp.task('sass', function(){
  gulp.src('app/scss/main.scss')
  .pipe(sass({ includePaths : ['_/partials/'] }))
  .pipe(sass({ style: 'expanded' }))
  .pipe(gulp.dest('app/css'))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest('app/css'));
});

gulp.task('templates', function(){
  gulp.src('app/templates/**/*.hbs')
  .pipe(handlebars())
  .pipe(wrap('Handlebars.template(<%= contents %>)'))
  .pipe(declare({
    namespace: 'tpl.templates',
    noRedeclare: true // Avoid duplicate declarations
  }))
  .pipe(concat('templates.js'))
  .pipe(gulp.dest('app'));
});

gulp.task('js', function() {
  return gulp.src([
    'app/js/app.js',
    'app/js/brd.js',
    'app/js/router.js',
    'app/js/helpers.js',
    'app/js/collections/*.js',
    'app/js/models/*.js',
    'app/js/routers/*.js',
    'app/js/views/**/*.js'
  ])
  .pipe(babel({
    presets: [["es2015"]]
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('app'));
});

gulp.task('watch', function(){
  log('Watching for changes...'+ (new Date()).toString());
  // Watch for CSS changes
  gulp.watch('app/scss/partials/*.scss', {interval: 1000}, ['sass']);
  // Watch for Handlebars template changes
  gulp.watch('app/templates/**/*.hbs', {interval: 1000}, ['templates']);
  // Watch for JS changes
  gulp.watch('app/js/**/*.js', {interval: 1000}, ['js']);
});