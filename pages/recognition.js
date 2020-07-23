import React from 'react'
// import { PropTypes } from 'prop-types';
// import Link from 'next/link';
import { HtmlHead } from '@components/html-head'
import { Header } from '@components/header'
import { Layout } from '@components/layout'
import { Wip } from '@components/wip'

const RecognitionPage = () => {
	return (
		<Layout>
			<HtmlHead title="Recognition | Andreas Ellwanger — Software Engineer." />
			<Header />
			<Wip page="Recognition" />
		</Layout>
	)
}

export default RecognitionPage
