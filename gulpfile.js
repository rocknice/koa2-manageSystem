const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-rollup');
const entry = "./src/nodeuii/**/*.js"
// 开发环境
function builddev() {
    return watch(entry, {
        ignoreInitial: false
    }, function(){
        gulp.src(entry)
        .pipe(babel({
            babelrc: false, // 让里面的babel生效，外面的不生效
            "plugin": [
                ['transform-es2015-modules-commonjs']
            ]
        }))
        .pipe(gulp.dest('dist'))
    })
}
// 上线环境
function buildprod() {
    return watch(entry, {
        ignoreInitial: false
    }, function(){
        gulp.src(entry)
        .pipe(babel({
            babelrc: false, // 让里面的babel生效，外面的不生效
            ignore: ["./src/server/config/*.js"],
            "plugin": [
                ['transform-es2015-modules-commonjs']
            ]
        }))
        .pipe(gulp.dest('dist'))
    })
}
// 对代码进行检查的环境
function buildlint() {}
// 清洗环境
function buildconfig() {}

let build = gulp.series(builddev)

if(process.env.NODE_ENV == "production") {
    build = gulp.series(buildprod, buildconfig)
}

if(process.env.NODE_ENV == "production") {
    build = gulp.series(buildlint, buildprod, buildconfig)
}

if(process.env.NODE_ENV == "lint") {
    build = gulp.series(buildlint)
}

gulp.task("default", build)