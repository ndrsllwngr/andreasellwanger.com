import React from 'react';
// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import { LinkWithSound } from 'components/link-with-sound';
import EmailIcon from 'assets/svg/email.svg';
import GitHubIcon from 'assets/svg/github.svg';
import TwitterIcon from 'assets/svg/twitter.svg';
import LinkedInIcon from 'assets/svg/linkedin.svg';
import DocumentDownload from 'assets/svg/document-download.svg';

export const Footer = () => {
	return (
		<div className="flex flex-col-reverse sm:flex-row container items-center justify-between mx-auto my-12 px-4">
			<p className="mt-8 sm:mt-0">© 2020-present Andreas Ellwanger. All Rights Reserved.</p>
			<div className="flex flex-row items-center justify-center">
				<a className="text-gray-800 hover:text-black w-6 h-6" href="/cv.pdf">
					<DocumentDownload />
					<span className="sr-only">CV</span>
				</a>
				<a className="text-gray-800 hover:text-black w-6 h-6 ml-5" href="mailto:contact@andreasellwanger.com">
					<EmailIcon />
					<span className="sr-only">Email</span>
				</a>
				<a className="text-gray-800 hover:text-black w-6 h-6 ml-5" href="https://de.linkedin.com/in/ellwanger/en/">
					<LinkedInIcon />
					<span className="sr-only">LinkedIn</span>
				</a>
				<a className="text-gray-800 hover:text-black w-6 h-6 ml-5" href="https://twitter.com/ndrsllwngr/">
					<TwitterIcon />
					<span className="sr-only">Twitter</span>
				</a>
				<a className="text-gray-800 hover:text-black w-6 h-6 ml-5" href="https://github.com/ndrsllwngr">
					<GitHubIcon />
					<span className="sr-only">GitHub</span>
				</a>
			</div>
		</div>
	);
};
