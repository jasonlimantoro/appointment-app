const { colors, fontFamily } = require('tailwindcss/defaultTheme');

const header = '4rem';

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir', ...fontFamily.sans],
      },
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
          default: '#b8b8b8',
          dark: '#707070',
          transparent: '#b8b8b83b',
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
        header,
        main: `calc(100vh - ${header})`,
      },
      height: {
        photoFeedback: '24rem',
        header,
      },
      borderRadius: {
        xl: '3rem',
      },
      screens: {
        xxl: '1600px',
      },
    },
  },
  variants: {},
  plugins: [],
};
