import React from 'react'
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
  return <div className="">{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node,
}
