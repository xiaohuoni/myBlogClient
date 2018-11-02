const { cilentSrc, cilentEntry, cilentOutput, publicPath } = require('./paths');

module.exports = {
  mode: 'development',
  entry: cilentEntry,
  output: {
    filename: 'app.js',
    path: cilentOutput,
    publicPath: publicPath,
  },
  resolve: {
    extensions: [
      '.js',
      '.tsx',
      '.ts'
    ],
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        include: cilentSrc,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
};
