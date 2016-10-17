var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
//cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
livereload = require('gulp-livereload');

gulp.task('build:js', function () {
    gulp.src(['node_modules/jquery/dist/jquery.min.js',
        'node_modules/aos/dist/aos.js',
        'http://code.createjs.com/easeljs-0.8.1.min.js',
        'http://code.createjs.com/tweenjs-0.6.1.min.js',
        'http://code.createjs.com/tweenjs-0.6.1.min.js',
        //'src/js/icons/ico_bezopasnost.js',
        //'src/js/icons/ico_kachestvo.js',
        //'src/js/icons/ico_planerovki.js',
        //'src/js/icons/ico_standart.js',
        //'src/js/icons/ico_zactroishik.js',
        'src/js/modernizr.custom.js',
        'src/js/classie.js',
        'src/js/pathLoader.js',
        'src/js/main.js'
    ])
        .pipe(concat('bundle.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./build/js/'))
});

gulp.task('less', function () {
    // place code for your default task here
    gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(autoprefixer('last 10 version'))
        .pipe(concat('main.css'))
        /*.pipe(rename({suffix: '.min'}))
         .pipe(cssnano())*/
        .pipe(gulp.dest('src/css'))
});

gulp.task('build:css', function(){

});

gulp.task('watch', ['less'], function () {
    livereload.listen();
    gulp.watch('src/less/*.less', ['less']);
});