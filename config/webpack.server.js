const { serverEntry, serverOutput, serverSrc, publicPath } = require('./paths');

module.exports = {
  target: 'node',
  entry: serverEntry,
  output: {
    filename: 'app.js',
    path: serverOutput,
    publicPath: publicPath,
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        include: serverSrc,
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
