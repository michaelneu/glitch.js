var gulp   = require("gulp");
var clean  = require("gulp-clean");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var less   = require("gulp-less");


var SRC = {
    JS: "src/js/**/*.js",
    CSS: "src/css/glitch.less",
    HTML: "src/index.html",
    TEST: {
        QUNIT: "test/**/*.html",
        UNITS: "test/**/*.js"
    }
};

var DEST = {
    JS: "dist/assets/js",
    CSS: "dist/assets/css",
    HTML: "dist/"
}

gulp.task("js", function () {
    gulp.src(SRC.JS)
        .pipe(concat("glitch.js"))
        .pipe(gulp.dest(DEST.JS))
        .pipe(uglify())
        .pipe(rename("glitch.min.js"))
        .pipe(gulp.dest(DEST.JS));
});

gulp.task("css", function () {
    gulp.src(SRC.CSS)
        .pipe(less({
            compress: "true"
        }))
        .pipe(gulp.dest(DEST.CSS));
});

gulp.task("html", function () {
    gulp.src(SRC.HTML)
        .pipe(gulp.dest(DEST.HTML));
});

gulp.task("default", ["js", "css", "html"]);

gulp.task("watch", ["default"], function () {
    gulp.watch(SRC.JS, ["js"]);
    gulp.watch("src/**/*.less", ["css"]);
    gulp.watch(SRC.HTML, ["html"]);
});
