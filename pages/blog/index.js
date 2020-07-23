/* eslint-disable react/prop-types */
import React from 'react'
// import { PropTypes } from 'prop-types';
// import Link from 'next/link';
import { HtmlHead } from '@components/html-head'
import { Header } from '@components/header'
import { Layout } from '@components/layout'
import getPosts from '@lib/get-posts'
import PostsList from '@components/posts-list'

const BlogPage = ({ posts }) => {
	return (
		<Layout>
			<HtmlHead title="Blog | Andreas Ellwanger — Software Engineer." />
			<Header />
			<article>
				<PostsList posts={posts} />
			</article>
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

export default BlogPage
