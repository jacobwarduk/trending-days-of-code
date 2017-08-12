import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {shape} from 'prop-types';
import base64 from 'base-64';
import Remarkable from 'remarkable';
import reactHtmlParser from 'react-html-parser';
import {apiUrl} from '../consts';

const sectionStyle = {
	margin: '.5rem'
};

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
		const md = new Remarkable();
		const htmlString = md.render(this.state.log);
		const htmlContent = reactHtmlParser(htmlString);
		console.log(this.props);

		return (
			<div className="card" style={ sectionStyle }>
				<div className="card-block">
					<h4 className="card-title">{this.props.match.params.id}</h4>
					<h6 className="card-subtitle mb-2 text-muted">
						<pre>100-days-of-code/log.md</pre>
					</h6>
					<div className="card-text">
						{htmlContent}
					</div>
					<div className="card-footer">
						<div className="text-left">
							<Link to={ '/' }>
								<button className="btn btn-primary">
									<div className="fa fa-chevron-left" />
									&nbsp; Back
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Log.propTypes = {
	match: shape().isRequired
};

export default Log;
