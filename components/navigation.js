import React from 'react';
import PropTypes from 'prop-types';
import EmailIcon from 'assets/email.svg';
import GitHubIcon from 'assets/github.svg';

export const Navigation = () => {
	return (
		<nav className="px-4 sm:px-0">
			<div className="flex flex-row container items-center justify-between mx-auto my-2">
				<p>Andreas Ellwanger</p>
				<div className="flex flex-row">
					<a className="ml-2 text-red-800 w-8 h-8" href="mailto:contact@onandoff.io">
						<EmailIcon />
					</a>
					<a className="ml-2 text-gray-400 w-8 h-8" href="https://github.com/onandoff-dev/">
						<GitHubIcon />
					</a>
				</div>
			</div>
		</nav>
	);
};

Navigation.propTypes = {
	children: PropTypes.node,
};
