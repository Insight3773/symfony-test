/*! gulpfile.js */

const gulp = require("gulp");
const gutil = require("gulp-util");
const browserify = require("browserify");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const source = require("vinyl-source-stream");
const concat = require("gulp-concat");
const sass = require('gulp-sass');

gulp.task("browserify", function() {
    const b = browserify({
        entries: "./assets/js/app.js",
        debug: true,
    });

    return b
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source("app.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on("error", gutil.log)
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./public/build/"));
});

gulp.task('sass', function() {
    gulp.src('./assets/scss/app.scss')
        .pipe(sass({
            includePaths: ['./node_modules'],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./public/build'))
});


gulp.task("bundle", ["browserify", 'sass'], function() {
    return gulp.src("public/build/app.js")
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concat("app.js"))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist"));
});

gulp.task('default', ['bundle']);