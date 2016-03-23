var gulp = require('gulp'),
// browserify = require('gulp-browserify'),
  webpack = require('webpack-stream'),
  rename = require('gulp-rename'),
  clean = require('gulp-clean'),
  // connect = require('gulp-connect'),
// livereload = require('livereload'),
  less = require('gulp-less'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");


var path = {
  src: "src/",
  js: "src/javascripts/",
  styles: "src/stylesheets/",
  dist: "public/",
  publicJavascripts: "public/javascripts/",
  publicStyles: "public/stylesheets/",
  publicFonts: "public/fonts/"
};

gulp.task('javascripts', function () {
  var appName = 'index.js',
    appSrc = path.js + appName;
  gulp.src(appSrc)
    .pipe(webpack({
      watch: true,
      
      module: {
        loaders: [

          {test: /\.js$/, loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'}
        ]
      }

    }))
    .pipe(rename(appName))
    .pipe(gulp.dest(path.publicJavascripts));
});

gulp.task('styles', function () {
  var lessName = 'style.less',
    lessSrc = path.styles + lessName;
  gulp.src([lessSrc])
    .pipe(less())
    .pipe(gulp.dest(path.publicStyles));
});

gulp.task('fonts', function () {
  return gulp.src('node_modules/bootstrap-less/fonts/*')
    .pipe(gulp.dest(path.publicFonts));
});



//
// gulp.task('clean', function () {
//   gulp.src(
//     [
//       path.publicJavascripts
//       , path.publicStyles
//       , path.publicFonts
//     ]
//     , {read: false})
//     .pipe(clean());
// });

gulp.task('dev', function () {
  gulp.run('javascripts', 'styles', 'fonts');

  gulp.watch(path.src + '**/*.*', function () {
    gulp.run('styles', 'fonts');
  });
});

// gulp.task('build', ['clean'], function () {
//   gulp.start('javascripts', 'styles', 'fonts')
// });
