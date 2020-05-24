import React from 'react';
// import { PropTypes } from 'prop-types';
// import Link from 'next/link';
import { Layout } from 'components/layout';
import { HtmlHead } from 'components/html-head';
import { Header } from 'components/header';
import { Hero } from 'components/hero';
import { LogoCloud } from 'components/logo-cloud';
import { BlogPreview } from 'components/blog-preview';
import { About } from 'components/about';
import { Footer } from 'components/footer';

const LandingPage = () => {
	return (
		<Layout>
			<HtmlHead title="Andreas Ellwanger — Software Engineer." />
			<Header />
			<Hero />
			<BlogPreview />
			<LogoCloud />
			<About />
			<Footer />
		</Layout>
	);
};

export default LandingPage;
