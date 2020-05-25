import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className="">
			<div className="flex flex-row flex-wrap container items-center justify-end mx-auto my-12 px-4">
				<nav className="flex flex-col sm:flex-row flex-wrap justify-end line-through">
					<Link href="/recognition">
						<a className="text-gray-800 text-lg tracking-tight font-medium hover:text-black ml-5 py-1 sm:py-0">
							Recognition
						</a>
					</Link>
					<Link href="/projects">
						<a className="text-gray-800 text-lg tracking-tight font-medium hover:text-black ml-5 py-1 sm:py-0">
							Projects
						</a>
					</Link>
					<Link href="/blog">
						<a className="text-gray-800 text-lg tracking-tight font-medium hover:text-black ml-5 py-1 sm:py-0">Blog</a>
					</Link>
					<Link href="/about">
						<a className="text-gray-800 text-lg tracking-tight font-medium hover:text-black ml-5 py-1 sm:py-0">About</a>
					</Link>
				</nav>
			</div>
		</header>
	);
};

Header.propTypes = {
	children: PropTypes.node,
};
