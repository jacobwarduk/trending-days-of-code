import React from 'react';
import axios from 'axios';
import {shape} from 'prop-types';
import base64 from 'base-64';
import {apiUrl} from '../consts';

class Log extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			log: ''
		};
	}

	componentDidMount() {
		this.getLogFile(this.props.match.params.id);
	}

	getLogFile(name) {
		axios.get(`${apiUrl}/repos/${name}/100-days-of-code/contents/log.md`)
			.then(res => {
				const log = base64.decode(res.data.content);
				this.setState({log});
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<pre>
					<code>
						{ console.log(this.state.log) }
						{ this.state.log }
					</code>
				</pre>
			</div>
		);
	}
}

Log.propTypes = {
	match: shape().isRequired
};

export default Log;
