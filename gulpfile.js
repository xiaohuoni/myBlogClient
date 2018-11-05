const { series, watch, src, dest } = require('gulp');
const ts = require('gulp-typescript');
const webpack = require('webpack-stream');
const minifyejs = require('gulp-minify-ejs');
const tsProject = ts.createProject('tsconfig.json');

function client(cb) {
  src('src/webui/*.tsx')
    .pipe(webpack(require('./config/webpack.dev.client')))
    .pipe(dest('public'));
  cb();
}

function ejs(cb) {
  src('src/nodeui/views/*.ejs')
    .pipe(minifyejs())
    .pipe(dest('build/nodeui/views'));
  cb();
}

function server(cb) {
  src(['src/**/*.ts', 'src/**/*.tsx'])
    .pipe(tsProject())
    .pipe(dest('build/'));
  cb();
}

watch('src',{},series(client, ejs, server))

exports.default = series(client, ejs, server);
