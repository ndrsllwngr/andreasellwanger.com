module.exports = {
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
		});

		return config;
	},
};
