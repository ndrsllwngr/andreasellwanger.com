import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = () => {
	const router = useRouter();
	return (
		<header className="">
			<div className="flex flex-row flex-wrap container items-center justify-between mx-auto my-12 px-4">
				{router.pathname !== '/' ? (
					<div className="group">
						<div className="text-base leading-none text-white bg-gray-800 font-medium print:bg-black px-6 py-1 block group-hover:hidden"></div>
						<Link href="/">
							<a className="font-normal font-sans uppercase tracking-wide hidden group-hover:block">↩ Go back</a>
						</Link>
					</div>
				) : (
					<div></div>
				)}

				<nav className="flex flex-col sm:flex-row flex-wrap justify-end">
					<Link href="/recognition">
						<a className="text-gray-400 text-lg tracking-tight font-medium hover:text-gray-500 ml-5 py-1 sm:py-0 line-through">
							Recognition
						</a>
					</Link>
					<Link href="/projects">
						<a
							className={`text-gray-800 text-lg tracking-tight font-medium hover:text-black ml-5 py-1 sm:py-0 ${
								router.pathname === '/projects' ? 'underline' : ''
							}`}
						>
							Projects
						</a>
					</Link>
					<Link href="/blog">
						<a className="text-gray-400 text-lg tracking-tight font-medium hover:text-gray-500 ml-5 py-1 sm:py-0 line-through">
							Blog
						</a>
					</Link>
					<Link href="/about">
						<a className="text-gray-400 text-lg tracking-tight font-medium hover:text-gray-500 ml-5 py-1 sm:py-0 line-through">
							About
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
};

Header.propTypes = {
	children: PropTypes.node,
};
