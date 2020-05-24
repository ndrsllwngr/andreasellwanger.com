import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';
import { LinkWithSound } from 'components/link-with-sound';
import EmailIcon from 'assets/svg/email.svg';
import GitHubIcon from 'assets/svg/github.svg';
import TwitterIcon from 'assets/svg/twitter.svg';
import LinkedInIcon from 'assets/svg/linkedin.svg';
import DocumentDownload from 'assets/svg/document-download.svg';

export const Header = () => {
	return (
		<header className="">
			<div className="flex flex-row container items-center justify-between mx-auto my-12 px-4 sm:px-0">
				{/* <Link href="/">
					<a className="font-bold text-2xl tracking-tighter">.</a>
				</Link> */}
				<div></div>
				<div className="flex flex-row">
					<LinkWithSound css="text-gray-800 hover:text-black w-6 h-6 ml-5" href="/cv.pdf">
						<DocumentDownload />
					</LinkWithSound>
					<LinkWithSound css="text-gray-800 hover:text-black w-6 h-6 ml-5" href="mailto:contact@onandoff.io">
						<EmailIcon />
					</LinkWithSound>
					<LinkWithSound
						css="text-gray-800 hover:text-black w-6 h-6 ml-5"
						href="https://de.linkedin.com/in/ellwanger/en/"
					>
						<LinkedInIcon />
					</LinkWithSound>
					<LinkWithSound css="text-gray-800 hover:text-black w-6 h-6 ml-5" href="https://twitter.com/ndrsllwngr/">
						<TwitterIcon />
					</LinkWithSound>
					<LinkWithSound css="text-gray-800 hover:text-black w-6 h-6 ml-5" href="https://github.com/onandoff-dev/">
						<GitHubIcon />
					</LinkWithSound>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	children: PropTypes.node,
};
