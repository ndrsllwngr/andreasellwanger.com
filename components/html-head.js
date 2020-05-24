import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export const HtmlHead = ({ title }) => {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>{title}</title>
			<meta name="author" content="Andreas Ellwanger" />
			<meta name="title" content="Andreas Ellwanger" />
			<meta
				name="description"
				content="Andreas, a postgraduate student, currently pursues Computer Science at the Ludwig Maximilian University of Munich, Germany and the Leiden University, The Netherlands. He graduated in April 2018 at the LMU Munich with a Bachelor of Science in Media Informatics and Human-Computer Interaction."
			/>
		</Head>
	);
};

HtmlHead.propTypes = {
	title: PropTypes.string,
};
