let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let sass = require("gulp-sass")
let watchSass = require("gulp-watch-sass")
let minify = require('gulp-minify');
let watch = require('gulp-watch');

gulp.task("default", function(){

    // Copia os Arquivos do Bootstrap
    gulp.src('bower_components/bootstrap/dist/css/*.min.css')
          .pipe(gulp.dest('app/dist/libs/css/'));
    gulp.src('bower_components/bootstrap/dist/js/*.min.js')
          .pipe(gulp.dest('app/dist/libs/js/'));
    gulp.src('bower_components/bootstrap/dist/fonts/*.*')
          .pipe(gulp.dest('app/dist/libs/fonts/'));

    //copia os arquivos do PopperJs
    gulp.src('bower_components/popper.js/dist/umd/popper.js')
        .pipe(gulp.dest('app/dist/libs/js/'));

    // Copia os arquivos do Jquery
    gulp.src('bower_components/jquery/dist/*.min.js')
          .pipe(gulp.dest('app/dist/libs/js/'));

    // Copia os arquivos do AngularJS
    gulp.src('bower_components/angular/*.min.js')
          .pipe(gulp.dest('app/dist/libs/js/'));
    gulp.src('bower_components/angular-route/*.min.js')
          .pipe(gulp.dest('app/dist/libs/js/'));

    // Copia e compila os arquivos sass
    gulp.src('sass/**/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(gulp.dest('app/dist/libs/css/'));

});

gulp.task('sass', function(){
  gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('app/dist/libs/css/'));
});

//verifica os arquivos sass por mudanças
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
