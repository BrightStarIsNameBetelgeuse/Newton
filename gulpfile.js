var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    //cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename');
    livereload = require('gulp-livereload');

gulp.task('less', function() {
    // place code for your default task here
    gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(autoprefixer('last 10 version'))
        .pipe(concat('main.css'))
        /*.pipe(rename({suffix: '.min'}))
        .pipe(cssnano())*/
        .pipe(gulp.dest('src/css'))
});

gulp.task('watch', ['less'], function(){
    livereload.listen();
    gulp.watch('src/less/*.less',['less']);
});