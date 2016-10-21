var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var gzip = require('gulp-gzip');

gulp.task('default', ['uglify', 'compress']);

gulp.task('uglify', function (cb) {
  pump([
        gulp.src('dist/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('dist/*.js'),
        gzip(),
        gulp.dest('dist')
    ],
    cb
  );
});
