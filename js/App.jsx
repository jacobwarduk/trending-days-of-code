import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FourOhFour from './404';
import Trending from './Trending';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Switch>
						<Route exact path="/" component={ Trending } />

						<Route component={ FourOhFour } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
