module.exports = {
	experimental: {
		jsconfigPaths: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									prefixIds: {
										prefixIds: false,
										prefixClassNames: false,
									},
								},
							],
						},
					},
				},
			],
		})
		config.module.rules.push({
			test: /\.mp3$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: [
				{
					loader: 'file-loader',
				},
			],
		})
		return config
	},
}
