import React from 'react';
import axios from 'axios';
import {apiUrl, baseRepo} from '../consts';
import Update from './Update';

class Trending extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			repos: []
		};

		this.page = 1;
	}

	componentDidMount() {
		this.getForkedRepos(this.page);
	}

	getForkedRepos(page) {
		axios.get(`${apiUrl}/repos/${baseRepo}/forks?page=${page}`)
			.then(res => {
				const repos = res.data;
				this.setState({repos});
				this.page++;
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		return (
			<main>
				{this.state.repos.map(props => <div><Update key={ props.owner.id } { ...props } /></div>)}
			</main>
		);
	}
}

export default Trending;
