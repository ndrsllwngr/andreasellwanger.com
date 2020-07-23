/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import NextHead from 'next/head'

const Head = ({ title = 'andreasellwanger.com', description = 'tbd', image, children }) => {
	return (
		<NextHead>
			{/* Title */}
			<title>{title}</title>
			<meta name="og:title" content={title} />

			{/* Description */}
			<meta name="description" content={description} />
			<meta name="og:description" content={description} />

			{/* General */}
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="Content-Language" content="en" />

			<meta name="twitter:site" content="@dan_abramov" />
			<meta name="apple-mobile-web-app-title" content="andreasellwanger.com" />
			<meta name="author" content="Andreas Ellwanger" />

			{/* RSS feed */}
			<link rel="alternate" type="application/rss+xml" title="RSS Feed for andreasellwanger.com" href="/feed.xml" />

			{/* TODO: Favicons */}
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="theme-color" content="#ffffff" />

			{/* Inter font */}
			<link
				rel="preload"
				href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
				as="font"
				type="font/woff2"
				crossOrigin="anonymous"
			/>

			{children}
		</NextHead>
	)
}

export default Head
