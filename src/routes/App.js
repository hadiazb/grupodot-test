import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Home from '../containers/Home/index';
import NotFound from '../containers/NotFound/index';
import HistoryCitys from '../containers/HistoryCitys/index';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/history' component={HistoryCitys} />
				<Route path='/*' component={NotFound} />
			</Switch>
		</Router>
	);
};

export default App;
