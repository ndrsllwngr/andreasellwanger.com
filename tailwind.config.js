// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      colors: {
        'my-black': '#010101',
        'my-grey': '#f4f4f4',
        'my-red': '#f02e09',
        'my-yellow': '#ffe312',
        'my-blue': '#0029ff',
        'my-grey-2': '#333',
        'my-blue-2': '#3098f3',
        celonis: '#5cfe50',
        lmu: '#009440',
        code: {
          punctuation: '#A1E8FF',
          tag: '#D58FFF',
          'attr-name': '#4BD0FB',
          'attr-value': '#A2F679',
          string: '#A2F679',
          highlight: 'rgba(134, 239, 172, 0.25)',
        },
        hero: '#F4F6F8',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
      backgroundImage: (theme) => ({
        'hero-pattern':
          "url('https://uploads-ssl.webflow.com/5e2f4dbfcb2e5e3f5edfe932/5e5c973863723ed613adba35_4color.png')",
        'new-pattern': 'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)',
      }),
      animation: {
        'bounce-once': 'bounce 1s linear 0s 2 normal both running',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // https://github.com/tailwindlabs/tailwindcss-typography
  ],
};
