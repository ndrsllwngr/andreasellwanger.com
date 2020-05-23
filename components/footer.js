import React from 'react';
import PropTypes from 'prop-types';

export const Footer = ({ children }) => {
	return <div className="">{children}</div>;
};

Footer.propTypes = {
	children: PropTypes.node,
};
