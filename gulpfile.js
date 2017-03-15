var gulp = require("gulp");
var less = require("gulp-less");
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();

// Compile less into CSS & auto-inject into browsers
gulp.task("style", function(err) {
  var onError = function(err) {
    notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
        sound:    "Beep"
    })(err);
    this.emit("end");
};
    return gulp.src("src/less/style.less")
      .pipe(plumber({errorHandler: onError}))
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(postcss([
        autoprefixer({
          browsers: ["last 2 versions", "> 2%"],
          cascade: false
        })
      ]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream());
});

// Static Server + watching less/html/img/js files
gulp.task("serve", ["less"], function() {

    browserSync.init(null, {
      proxy: "1-barbershop"
    });

    gulp.watch("src/css/**/*.less", ["style"]);
    gulp.watch("src/*.html").on("change", browserSync.reload);
    gulp.watch("src/img/**/*.{png,jpg,gif,svg}").on("change", browserSync.reload);
    gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
});

// Default: turn the server on and refresh/inject on change!
gulp.task("default", ["serve"]);
