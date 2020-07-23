import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

export const HtmlHead = ({ title }) => {
	return (
		<Head>
			<title>{title || `Andreas Ellwanger — Software Engineer.`}</title>
			<meta name="author" content="Andreas Ellwanger" />
			<meta
				name="description"
				content="Andreas is a Software Engineer at Celonis and studies Computer Science at LMU Munich. He graduated in April 2018 at the LMU Munich with a Bachelor of Science in Media Informatics and Human-Computer Interaction."
			/>
		</Head>
	)
}

HtmlHead.propTypes = {
	title: PropTypes.string,
}
