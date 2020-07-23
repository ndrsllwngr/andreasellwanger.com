import React from 'react'
import { PropTypes } from 'prop-types'
import Link from 'next/link'

export const Wip = ({ page }) => {
	return (
		<section className="container max-w-5xl mx-auto my-12 py-16 px-4 flex flex-col justify-center">
			<h1 className="font-bold text-4xl md:text-6xl tracking-wide leading-tight font-mono uppercase">
				<span className="text-gray-800">#{page}</span> is still under construction.
			</h1>
			<Link href="/">
				<a className="font-normal font-sans uppercase tracking-wide mt-6">↩ Go back</a>
			</Link>
		</section>
	)
}

Wip.propTypes = {
	page: PropTypes.string,
}
