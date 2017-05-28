var gulp = require("gulp"),
    util = require("gulp-util"),
    sass = require("gulp-sass"),
    minifycss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    log = util.log;

var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');


gulp.task("sass", function(){
  log("Generate CSS files " + (new Date()).toString());
  gulp.src('app/scss/main.scss')
  .pipe(sass({ includePaths : ['_/partials/'] }))
  .pipe(sass({ style: 'expanded' }))
  .pipe(gulp.dest("app/css"))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest('app/css'));
});

gulp.task('templates', function(){
  log("Generate .hbs files " + (new Date()).toString());
  gulp.src('app/templates/*.hbs')
  .pipe(handlebars())
  .pipe(wrap('Handlebars.template(<%= contents %>)'))
  .pipe(declare({
    namespace: 'brd.templates',
    noRedeclare: true // Avoid duplicate declarations
  }))
  .pipe(concat('templates.js'))
  .pipe(gulp.dest('app/js'));
});

gulp.task('js', function() {
  return gulp.src([
    'app/js/app.js',
    'app/js/collections/*.js',
    'app/js/models/*.js',
    'app/js/routers/*.js',
    'app/js/views/*.js'
  ])
  .pipe(concat('all.js'))
  .pipe(gulp.dest('app/js'));
});

gulp.task("watch", function(){
  log("Watching scss files for modifications");
  gulp.watch('app/scss/partials/*.scss', ["sass"]);
});