import React from 'react';
import { PropTypes } from 'prop-types';
import Link from 'next/link';

const BlogEntry = ({ date, title, link }) => {
	return (
		<Link href={link}>
			<a>
				<span className="font-mono mr-10">{date}</span>
				{title}
			</a>
		</Link>
	);
};

BlogEntry.propTypes = {
	date: PropTypes.string,
	title: PropTypes.string,
	link: PropTypes.string,
};

export const BlogPreview = () => {
	return (
		<div className="bg-black rounded-md container mx-auto p-6">
			<div className="px-4 sm:px-0 flex flex-col justify-center">
				<h2 className="uppercase text-white font-medium tracking-wide mb-4">Recently published</h2>
				<ul className="text-white">
					<li>
						<BlogEntry link="/first-entry" title="My first blog entry" date="2020-04-24" />
					</li>
				</ul>
			</div>
		</div>
	);
};
