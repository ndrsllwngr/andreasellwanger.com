import React from 'react';
import PropTypes from 'prop-types';

export const Navigation = ({ children }) => {
	return <div className="">{children}</div>;
};

Navigation.propTypes = {
	children: PropTypes.node,
};
