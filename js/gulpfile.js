const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const minifyCss = require('gulp-minify-css');
const htmlmin = require('gulp-htmlmin');

exports.default = function () {
    return src('*.js')
        // gulp-uglify 插件并不改变文件名
        .pipe(uglify())
        // 因此使用 gulp-rename 插件修改文件的扩展名
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('minijs./'));
}
exports.minify = function () {
    return src('../css/*.css')
        .pipe(minifyCss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('minicss./'));

    }

    const options = {
        collapseWhitespace:true,
        collapseBooleanAttributes:true,
        removeComments:true,
        removeEmptyAttributes:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        minifyJS:true,
        minifyCSS:true   
    };
    exports.html = function () {
        return src('../html/*.html')
            .pipe(htmlmin(options))
            .pipe(dest('minihtml./'));
    
        }