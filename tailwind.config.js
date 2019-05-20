const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          default: '#1985a0',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
