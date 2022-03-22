const path = require('path');

module.exports = {
  mode: 'development',
  entry: './scripts/script.js',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};