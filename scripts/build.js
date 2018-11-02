const webpack = require('webpack');
const serverConfig = require('../config/webpack.prod.server')
const clientConfig = require('../config/webpack.prod.client')

const config = [serverConfig, clientConfig]
const Compiler = webpack(config);

Compiler.run(err => {
  if(!err) console.log(err);
})
