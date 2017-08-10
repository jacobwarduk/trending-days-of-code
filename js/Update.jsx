import React from 'react';
import {shape, string} from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import {Link} from 'react-router-dom';

const Avatar = styled.img`
	max-width: 64px;
	border-radius: 100%;
	margin-right: .5rem;
`;

const sectionStyle = {
	margin: '.5rem'
};

class Update extends React.Component {
	render() {
		console.log(this.props);

		return (
			<section className="card" style={ sectionStyle }>
				<div className="card-block">
					<div className="media">
						<div className="media-left">
							<a href={ this.props.owner.html_url }>
								<Avatar src={ this.props.owner.avatar_url } alt={ this.props.owner.login } />
							</a>
						</div>
						<div className="media-body">
							<h3 className="media-heading">{ this.props.owner.login }</h3>
							<p>
								<small className="text-muted">{ this.props.full_name }</small>
							</p>
							<p>
								<small className="text-muted"><b>Last updated: </b> { moment(this.props.updated_at)
									.format('ddd Do MMM, YYYY') }</small>
							</p>
						</div>
					</div>
				</div>
				<div className="card-footer">
					<div className="text-right">
						<Link to={ `/log/${this.props.owner.login}` }>
							<button className="btn btn-primary">
								<div className="fa fa-calendar" />
								&nbsp; View Log
							</button>
						</Link>
					</div>
				</div>
			</section>
		);
	}
}

Update.propTypes = {
	owner: shape().isRequired,
	updated_at: string.isRequired,
	full_name: string.isRequired
};

Update.defaultProps = {};

export default Update;
