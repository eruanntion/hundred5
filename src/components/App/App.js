import React, {Component} from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import star from '../Star/star-active.svg';
import './App.css';
import Popup from '../Popup';
import {openPopupAction, closePopupAction, setRatingAction, fetchDataAction} from '../../actions';

/**
 * App component. Main & only redux container component of this mini app.
 */
class App extends Component {

	componentDidMount() {
		this.props.fetchDataAction();
	}

	render() {
		const {
			rating, isClosed, isFetchingData, isSubmittingRating,
			openPopupAction, closePopupAction, setRatingAction
		} = this.props;

		// Initial appContainer
		let appContainer = '';

		// The app container depends on the state of data
		if (isFetchingData === true) {
			appContainer = 'Loading data...';
		} else if (isSubmittingRating) {
			appContainer = 'Submitting rating...';
		} else if (rating !== null) {
			appContainer = <div className="App__submitted-rating">
				<img src={star} alt="stars"/> {rating}
			</div>;
		} else if (isClosed) {
			appContainer = <div>
				Popup has been closed! <span className="App__open-popup" onClick={openPopupAction}>Click here</span> to open.
			</div>;
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
				<footer className="App__footer">
					*You can provide Authorization token by supplying user in query string (for example user=John).
					If not supplied, default, 'Ivan666', will be used</footer>
			</div>
		);
	}
}

const mapStateToProps = ({rating, isClosed, isFetchingData, isSubmittingRating}) =>
	({rating, isClosed, isFetchingData, isSubmittingRating});

export default connect(mapStateToProps, {openPopupAction, closePopupAction, setRatingAction, fetchDataAction})(App);
