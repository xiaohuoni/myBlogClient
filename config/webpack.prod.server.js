const server = require('./webpack.server')
const merge = require('webpack-merge');

module.exports = merge(server, {
  mode: 'production'
})
