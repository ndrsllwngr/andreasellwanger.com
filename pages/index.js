/* eslint-disable no-unused-vars */
import React from 'react'
// import { PropTypes } from 'prop-types';
// import Link from 'next/link';
import { Layout } from '@components/layout'
import { HtmlHead } from '@components/html-head'
import { Header } from '@components/header'
import { Hero } from '@components/hero'
import { LogoCloud } from '@components/logo-cloud'
import { BlogPreview } from '@components/blog-preview'
import { About } from '@components/about'
import { Footer } from '@components/footer'
import getPosts from '@lib/get-posts'
import PostsList from '@components/posts-list'

// eslint-disable-next-line react/prop-types
const LandingPage = ({ posts }) => {
	return (
		<Layout>
			<HtmlHead />
			<Header />
			<Hero />
			<BlogPreview />
			<LogoCloud />
			<About />
			<Footer />
		</Layout>
	)
}

export const getStaticProps = () => {
	const posts = getPosts()

	return {
		props: {
			posts,
		},
	}
}

export default LandingPage
