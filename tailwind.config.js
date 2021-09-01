const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      colors: {
        'my-black': '#010101',
        'my-grey': '#f4f4f4',
        'my-red': '#f02e09',
        'my-yellow': '#ffe312',
        'my-blue': '#0029ff',
        celonis: '#5cfe50',
        lmu: '#009440',
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        code: {
          punctuation: '#A1E8FF',
          tag: '#D58FFF',
          'attr-name': '#4BD0FB',
          'attr-value': '#A2F679',
          string: '#A2F679',
          highlight: 'rgba(134, 239, 172, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // https://tailwindcss.com/docs/typography-plugin
  ],
}
