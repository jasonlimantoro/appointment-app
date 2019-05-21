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
      fontSize: {
        '2.5xl': '1.625rem',
        '4.5xl': '2.625rem',
        '7xl': '4.25rem',
      },
      lineHeight: {
        lg: '3rem',
        xl: '4.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
