const gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function(){
    gulp.src('./less/*.less')
        .pipe(less({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            versions:['last 2 browsers','ie >= 9', 'and_chr >= 2.3']
        }))
        .pipe(gulp.dest('./css'))
});

gulp.task('default', function(){
    gulp.watch('./less/*.less', ['less']);
});

