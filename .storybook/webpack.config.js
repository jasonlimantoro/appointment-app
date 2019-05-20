const app = require('../webpack.config.js');

module.exports = async ({ config }) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...app.module.rules,
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
              plugins: [
                'react-docgen',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
        },
      ],
    },
  };
};
