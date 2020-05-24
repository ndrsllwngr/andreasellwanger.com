import React from 'react';
// import Link from 'next/link';
import { Layout } from 'components/layout';
import { HtmlHead } from 'components/html-head';
import { Header } from 'components/header';
import { Hero } from 'components/hero';

const LandingPage = () => {
	return (
		<Layout>
			<HtmlHead title="Andreas Ellwanger — Software Engineer." />
			<Header />
			<Hero />
		</Layout>
	);
};

export default LandingPage;
