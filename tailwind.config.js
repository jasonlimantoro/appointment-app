const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          light: '#19A8C3',
          default: '#1985a0',
          dark: '#095f7d',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
