const gulp = require('gulp');
const ts = require('gulp-typescript');
const webpack = require('webpack-stream');
const minifyejs = require("gulp-minify-ejs")
const nodemon = require('gulp-nodemon')
const watch = require('gulp-watch')
const tsProject = ts.createProject('tsconfig.json');

gulp.task('client', () => {
  return gulp.src('src/webui/*.tsx')
  .pipe(webpack(require('./config/webpack.dev.client')))
  .pipe(gulp.dest('public'))
})

gulp.task('ejs', () => {
  return gulp.src('src/nodeui/views/*.ejs')
  .pipe(minifyejs())
  .pipe(gulp.dest('build/nodeui/views'))
})

gulp.task('server', () => {
  return gulp.src(['src/**/*.ts', 'src/**/*.tsx'])
    .pipe(tsProject())
    .pipe(gulp.dest('build/'))
})

gulp.task('default', gulp.series(gulp.parallel('client', 'ejs', 'server'), (done) => {
  watch('src', batch(function (events, done) {
    gulp.start('build', done);
  }));
  nodemon({
    script: 'build/app.js',
    ext: 'js ejs',
    env: { 'NODE_ENV': 'development' },
    done: done
  })
}))
