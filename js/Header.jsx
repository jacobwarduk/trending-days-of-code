import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<nav className="navbar sticky-top navbar-inverse bg-inverse">
					<h1><a href="#">#100DaysOfCode</a></h1>
				</nav>
			</header>
		);
	}
}

export default Header;
