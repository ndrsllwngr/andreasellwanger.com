import React from 'react'
import Router from 'next/router'
import App from 'next/app'
import nprogress from 'nprogress'
import debounce from 'lodash.debounce'

import '@styles/tailwind.css'

// Only show nprogress after 500ms (slow loading)
const start = debounce(nprogress.start, 500)
Router.events.on('routeChangeStart', start)
// eslint-disable-next-line no-unused-vars
Router.events.on('routeChangeComplete', (url) => {
	start.cancel()
	nprogress.done()
	window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', () => {
	start.cancel()
	nprogress.done()
})

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return <Component {...pageProps} />
	}
}

export default MyApp
