import React from 'react'
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
	return <div className="antialiased min-h-screen font-sans">{children}</div>
}

Layout.propTypes = {
	children: PropTypes.node,
}
