/* Importing functions */
const {src, dest, watch, series} = require ('gulp')
const sass =require('gulp-sass')(require('sass'))
/* const purgecss = require('gu;p-purgecss') */

/* Compiling SASS to CSS */

convertCss = () => {
    return src('litecss/**/*.scss')
        .pipe(sass())
/*         .pipe(purgecss({ content: ['*.html']})) */
        .pipe(dest('litecss/css'))
}
/* Watching for changes in sass file */
watchMan = () =>{
    watch(['litecss/**/*.scss'], convertCss)
}

exports.default = series(convertCss,watchMan)