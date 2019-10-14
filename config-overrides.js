const path = require('path');
const {
  override, addBabelPreset, addWebpackResolve,
} = require('customize-cra');

module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop'),
  addWebpackResolve({
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
    },
  })
);
