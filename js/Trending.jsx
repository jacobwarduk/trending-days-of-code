import React from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import {apiUrl, baseRepo} from '../consts';

class Trending extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			repos: []
		};
	}

	componentDidMount() {
		this.getForkedRepos(1);
	}

	getForkedRepos(page) {
		axios.get(`${apiUrl}/repos/${baseRepo}/forks?page=${page}`)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		return (
			<div>
				<h1>Its alive...!</h1>
				<Button bsStyle="success" bsSize="small">Test Button</Button>
			</div>
		);
	}
}

export default Trending;
