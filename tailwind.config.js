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
        gray: {
          ...colors.blue,
          light: '#dddddd',
          default: '#a2a2a2',
          dark: '#707070',
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
      minHeight: {
        inherit: 'inherit',
        header: '4rem',
        main: 'calc(100vh - 4rem)',
      },
      borderRadius: {
        xl: '3rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
