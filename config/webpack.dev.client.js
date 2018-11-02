const server = require('./webpack.client')
const merge = require('webpack-merge');

module.exports = merge(server, {
  mode: 'development'
})
