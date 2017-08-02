import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FourOhFour from './404';
import Trending from './Trending';
import Header from './Header';
import Log from './Log';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<BrowserRouter>
					<div className="app">
						<Switch>
							<Route exact path="/" component={ Trending } />
							<Route path="/log/:id" component={ Log } />
							<Route component={ FourOhFour } />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
