import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from '../Popup';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App__header">
					<img src={logo} className="App__logo" alt="logo"/>
				</header>
				<div className="App__container">
					<Popup/>
				</div>
			</div>
		);
	}
}

export default App;
