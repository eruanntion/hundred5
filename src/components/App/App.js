import React, {Component} from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Popup from '../Popup';
import {closePopupAction, setRatingAction} from '../../actions';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App__header">
					<img src={logo} className="App__logo" alt="logo"/>
				</header>
				<div className="App__container">
					<Popup
						rating={this.props.rating}
						onClose={this.props.closePopupAction}
						onStarClick={this.props.setRatingAction}/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({rating, isClosed}) => ({rating, isClosed});

export default connect(mapStateToProps, {closePopupAction, setRatingAction})(App);
