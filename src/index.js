import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Global.scss';
import App from './routes/App';
import store from './store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
