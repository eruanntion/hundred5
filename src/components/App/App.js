import React, {Component} from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Popup from '../Popup';
import {closePopupAction, setRatingAction, fetchDataAction} from '../../actions';

/**
 * App component. Main & only redux container component of this mini app.
 */
class App extends Component {

	componentDidMount() {
		this.props.fetchDataAction();
	}

	render() {
		const {rating, isClosed, isFetchingData, closePopupAction, setRatingAction} = this.props;

		// Initial appContainer
		let appContainer = '';

		// The app container depends on the state of data
		if (isFetchingData === true) {
			appContainer = 'Loading data...'
		} else if (isClosed === true) {
			appContainer = 'Popup closed';
		} else if (isClosed === false) {
			appContainer = <Popup rating={rating}
										onClose={closePopupAction}
										onStarClick={setRatingAction}/>;
		} else if (isClosed === null && rating === null) {
			appContainer = 'Couldn\'t load data from the server';
		}

		return (
			<div className="App">
				<header className="App__header">
					<img src={logo} className="App__logo" alt="logo"/>
				</header>
				<div className="App__container">
					{appContainer}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({rating, isClosed, isFetchingData}) => ({rating, isClosed, isFetchingData});

export default connect(mapStateToProps, {closePopupAction, setRatingAction, fetchDataAction})(App);
