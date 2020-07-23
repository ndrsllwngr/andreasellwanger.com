import React from 'react'

import Error from '@components/error'

class E extends React.Component {
	static getInitialProps({ res, err }) {
		const status = res ? res.statusCode : err ? err.statusCode : null
		return { status }
	}

	render() {
		// eslint-disable-next-line react/prop-types
		const { status } = this.props
		return <Error status={status} />
	}
}

export default E
