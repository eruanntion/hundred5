import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

import './index.css';
import App from './components/App';
import reducer from './reducers';
import {getQueryVariable} from './helpers';
import registerServiceWorker from './registerServiceWorker';

// Used to properly setup REDUX_DEVTOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// Set axios defaults for shorter syntax
axios.defaults.baseURL = 'https://api-fknaanjgow.now.sh/feedback/';
// You can provide Authorization token by supplying user in query string (for example user=John)
// If not supplied, default, 'Ivan666', will be used
axios.defaults.headers.common['Authorization'] = 'Bearer ' + (getQueryVariable('user') || 'IvanMilutinovic');

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));

registerServiceWorker();
