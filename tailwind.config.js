// const defaultConfig = require('tailwindcss/defaultConfig')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: {
		content: ['./components/**/*.{js,mdx}', './pages/**/*.{js,mdx}'],
		options: {
			whitelist: ['fill-current', 'stroke-current', 'inline-block', 'w-full', 'h-full'],
		},
	},
	theme: {
		extend: {
			colors: {
				'my-black': '#010101',
				'my-grey': '#f4f4f4',
				'my-red': '#f02e09',
				'my-yellow': '#ffe312',
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
				system: defaultTheme.fontFamily.sans,
				'system-mono': defaultTheme.fontFamily.sans,
			},
			fontSize: {
				hero: '4rem',
			} ,
			lineHeight: {
				16: '4rem',
			},
		},
	},
	variants: {
		display: ['responsive', 'group-hover'],
	},
	plugins: [],
};
