import React from 'react';
import { PropTypes } from 'prop-types';
import LogoAiderly from 'assets/svg/logo-aiderly.svg';
import LogoCelonis from 'assets/svg/logo-celonis.svg';
import LogoLmu from 'assets/svg/logo-lmu.svg';
import LogoTech4Germany from 'assets/svg/logo-tech4germany.svg';
import LogoLeiden from 'assets/svg/logo-leiden.svg';

const Logo = ({ children, link }) => {
	return (
		<div className="flex py-6 justify-center px-10 m-4">
			<a className="text-gray-800 hover:text-black w-32 h-32" href={link}>
				{children}
			</a>
		</div>
	);
};

Logo.propTypes = {
	children: PropTypes.node,
	link: PropTypes.string,
};

const MyLogos = [
	{
		logo: <LogoCelonis />,
		link: 'https://www.celonis.com/',
	},
	{
		logo: <LogoLmu />,
		link: 'https://www.uni-muenchen.de/',
	},
	{
		logo: <LogoAiderly />,
		link: 'https://aiderly.de/',
	},
	{
		logo: <LogoTech4Germany />,
		link: 'https://tech.4germany.org/',
	},
	{
		logo: <LogoLeiden />,
		link: 'https://liacs.leidenuniv.nl/',
	},
];

export const LogoCloud = () => {
	return (
		<section className="container mx-auto py-16 px-4 sm:px-0 flex flex-col justify-center">
			<div className="flex flex-wrap justify-center">
				{MyLogos.map((logo, index) => (
					<Logo key={index} link={logo.link}>
						{logo.logo}
					</Logo>
				))}
			</div>
		</section>
	);
};
