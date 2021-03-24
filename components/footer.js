import React from 'react'
// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import { LinkWithSound } from 'components/link-with-sound';
import { FaStackOverflow, FaLinkedinIn, FaTwitter, FaGithub, FaFileDownload, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
	return (
		<div className="flex flex-col-reverse sm:flex-row container items-center justify-between mx-auto my-12 px-4">
			<p className="mt-8 sm:mt-0 dark:text-white">© 2020-present Andreas Ellwanger. All Rights Reserved.</p>
			<div className="flex flex-row items-center justify-center">
				{/* <a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-6 h-6" href="/cv.pdf">
					<FaFileDownload className="fill-current inline-flex self-center w-6 h-6" />
					<span className="sr-only">CV</span>
				</a> */}
				<a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-6 h-6" href="mailto:contact@andreasellwanger.com">
					<FaEnvelope className="fill-current inline-flex self-center w-6 h-6" />
					<span className="sr-only">Email</span>
				</a>
				<a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-6 h-6 ml-5" href="https://de.linkedin.com/in/ellwanger/en/">
					<FaLinkedinIn className="fill-current inline-flex self-center w-6 h-6" />
					<span className="sr-only">LinkedIn</span>
				</a>
				<a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-6 h-6 ml-5" href="https://twitter.com/ndrsllwngr/">
					<FaTwitter className="fill-current inline-flex self-center w-6 h-6" />
					<span className="sr-only">Twitter</span>
				</a>
				<a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-6 h-6 ml-5" href="https://github.com/ndrsllwngr">
					<FaGithub className="fill-current inline-flex self-center w-6 h-6" />
					<span className="sr-only">GitHub</span>
				</a>
				<a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-6 h-6 ml-5" href="https://stackoverflow.com/users/story/7640933">
					<FaStackOverflow className="fill-current inline-flex self-center w-6 h-6" />
					<span className="sr-only">StackOverflow</span>
				</a>
			</div>
		</div>
	);
};
