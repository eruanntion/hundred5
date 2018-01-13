import {combineReducers} from 'redux';

/**
 * Rating reducer
 * @param state
 * @param action
 * @returns {*}
 */
const rating = (state = null, action) => {
	switch (action.type) {
		case 'FETCH_RATING_REQUEST_SUCCESS':
		case 'SET_RATING':
			return action.payload.rating;
		case 'FETCH_RATING_REQUEST_FAILURE':
			return null;
		default:
			return state;
	}
};

/**
 * isClosed reducer
 * @param state
 * @param action
 * @returns {*}
 */
const isClosed = (state = null, action) => {
	switch (action.type) {
		case 'FETCH_CLOSED_REQUEST_SUCCESS':
			return action.payload.closed;
		case 'FETCH_CLOSED_REQUEST_FAILURE':
			return null;
		case 'OPEN_POPUP':
			return false;
		case 'CLOSE_POPUP':
			return true;
		default:
			return state;
	}
};

/**
 * Ajax loading reducer
 * @param state
 * @param action
 * @returns {boolean}
 */
const isFetchingData = (state = null, action) => {
	switch (action.type) {
		case 'FETCH_DATA_START':
			return true;
		case 'FETCH_DATA_END':
			return false;
		default:
			return state;
	}
};

export default combineReducers({rating, isClosed, isFetchingData});