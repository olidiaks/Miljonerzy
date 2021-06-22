const gulp = require('gulp');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify-css');

gulp.task("build-js",function (cb){
    gulp.src('skrypty.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
    cb();
});

gulp.task("coppy-html", function(cb){
    gulp.src('*.html').pipe(gulp.dest('build'));
    cb();
});

gulp.task("build-css", function(cb){
    gulp.src('*.css')
    .pipe(minify())
    .pipe(gulp.dest("build"));
    cb();
});

gulp.task("default",gulp.series('build-js','coppy-html','build-css'));