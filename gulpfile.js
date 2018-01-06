const gulp = require('gulp');
const sass = require('gulp-sass');
const replace = require('gulp-replace');

gulp.task('sass', () => gulp.src('./scss/spacing-in-pixels.scss')
    .pipe(sass({
        /* Default: nested | Values: nested, expanded, compact, compressed */
        outputStyle: 'compact'
    }).on('error', sass.logError))
    .pipe(replace(/\n\n/g, '\n'))
    .pipe(gulp.dest('./css/'))
);

gulp.task('watch', () => gulp.watch('./scss/*.scss', ['sass']));

gulp.task('default', ['sass']);
