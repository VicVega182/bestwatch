/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var useref = require('gulp-useref');
var browserSync = require('browser-sync');

gulp.task('useref', function(){
  var assets = useref.assets();

  return gulp.src('public_html/*.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(useref())
});
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'public_html/'
    }
  });
});
gulp.task('watch', ['browserSync'], function (){
  gulp.watch('public_html/css/*.css', browserSync.reload); 
  gulp.watch('public_html/*.html', browserSync.reload); 
  gulp.watch('public_html/js/*.js', browserSync.reload); 
});
