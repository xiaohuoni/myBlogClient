const webpack = require('webpack');
const middleware = require('webpack-dev-middleware')
const serverConfig = require('../config/webpack.dev.server')
const clientConfig = require('../config/webpack.dev.client')

const config = [serverConfig, clientConfig]
const Compiler = webpack(config);

Compiler.watch({
  aggregateTimeout: 300,
  ignored: [
    'node_modules',
    'config',
    'build',
    'scripts'
  ]
}, err => {
  if(err) console.log(err);
})
