import React from 'react';
import {shape} from 'prop-types';

class Log extends React.Component {
	render() {
		return (
			<div>
				<pre>
					<code>
						window.atob()
						{ JSON.stringify(this.props.match) }
						{ JSON.stringify(this.props.history) }
					</code>
				</pre>
			</div>
		);
	}
}

Log.propTypes = {
	match: shape().isRequired,
	history: shape().isRequired
};

export default Log;
