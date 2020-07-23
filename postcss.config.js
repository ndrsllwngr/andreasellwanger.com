const purgecss = [
	'@fullhuman/postcss-purgecss',
	{
		content: ['./components/**/*.js', './pages/**/*.js'],
		whitelist: ['fill-current', 'stroke-current', 'inline-block', 'w-full', 'h-full'],
		defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
	},
]
module.exports = {
	plugins: [
		'postcss-import',
		'tailwindcss',
		'autoprefixer',
		...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
	],
}
