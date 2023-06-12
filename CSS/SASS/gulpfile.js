const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    // folder scss
    // ** semua sub folder
    // * semua file
    // .scss dengan ekstensi scss
    return src('scss/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['scss/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)