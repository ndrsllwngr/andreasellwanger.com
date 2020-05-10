const defaultConfig = require('tailwindcss/defaultConfig')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        "my-black": "#010101",
        "my-grey": "#f4f4f4",
        "my-red": "#f02e09",
        "my-yellow": "#ffe312",
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
      lineHeight: {
        '16': '4rem'
      }
    },
  },
  variants: {},
  plugins: [],
};
