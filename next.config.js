module.exports = {
  webpack(config, _options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
                prefixIds: {
                  prefixIds: false,
                  prefixClassNames: false,
                },
              },
            },
          },
        },
      ],
    })
    return config
  },
}
