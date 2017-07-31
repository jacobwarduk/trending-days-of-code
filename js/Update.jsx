import React from 'react';
import {shape, string} from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const Avatar = styled.img`
	max-width: 48px;
	border-radius: 100%;
	margin-right: .5rem;
`;

class Update extends React.Component {
	render() {
		console.log(this.props);

		return (
			<section className="card">
				<div className="card-block">
					<div className="media">
						<div className="media-left">
							<a href="#">
								<Avatar src={ this.props.owner.avatar_url } alt={ this.props.owner.login } />
							</a>
						</div>
						<div className="media-body">
							<h3 className="media-heading">{ this.props.owner.login }</h3>
							<p>
								<small className="text-muted"><b>Last updated: </b> { moment(this.props.updated_at).format('ddd Do MMM, YYYY') }</small>
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

Update.propTypes = {
	owner: shape().isRequired,
	updated_at: string.isRequired
};

Update.defaultProps = {};

export default Update;
