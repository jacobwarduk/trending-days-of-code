import React from 'react';
import {shape} from 'prop-types';

class Log extends React.Component {
	render() {
		return (
			<div>
				{ this.props.match.params.id }
			</div>
		);
	}
}

Log.propTypes = {
	match: shape().isRequired
};

export default Log;
