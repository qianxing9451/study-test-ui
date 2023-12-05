const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); //sass -> css
const minifyCSS = require('gulp-minify-css') //压缩css的插件

gulp.task('sass',async function(){
    return gulp.src('components/css/**/*.scss') //创建一个流，用于从文件系统读取 Vinyl 对象。
    .pipe(sass()) //执行sass() 将sass转换为css
    .pipe(minifyCSS()) //执行压缩 css
    .pipe(gulp.dest('dist/css'))  //dest  写入文件流
})
