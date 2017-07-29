import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FourOhFour from './404';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Switch>
						<Route exact path="/" component={ Landing } />



						<Route component={ FourOhFour } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
