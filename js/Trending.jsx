import React from 'react';
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
				const repos = res.data.map(repo => repo);
				this.setState({repos});
				console.log(this.state.repos);
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		return (
			<div>
				<h1>Its alive...!</h1>
				<ul>
					{this.state.repos.map(repo => <li>{repo.url}</li>)}
				</ul>
			</div>
		);
	}
}

export default Trending;
