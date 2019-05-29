const webpackMerge = require('webpack-merge');
const common = require('./webpack/webpack.common');

const STAGE = {
  development: 'dev',
  staging: 'prod',
  production: 'prod',
};
/* eslint-disable global-require,import/no-dynamic-require */
const stage = STAGE[process.env.APP_STAGE || 'development'];
const envConfig = require(`./webpack/webpack.${stage}.js`);
module.exports = webpackMerge(common, envConfig);
