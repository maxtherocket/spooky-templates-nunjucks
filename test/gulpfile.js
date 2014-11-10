var gulp = require('gulp');
var browserify = require('gulp-browserify');
//var rename = require('gulp-rename');

// Basic usage
gulp.task('default', function() {
    // Single entry point to browserify
    gulp.src('index.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        })) 
        .pipe(gulp.dest('./bundle'))
});