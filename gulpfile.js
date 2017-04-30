const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./src/sass/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);