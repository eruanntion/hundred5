import {combineReducers} from 'redux';

/**
 * Rating reducer
 * @param state
 * @param action
 * @returns {*}
 */
export const rating = (state = null, action) => {
	switch (action.type) {
		case 'FETCH_RATING_REQUEST_SUCCESS':
		case 'SET_RATING_REQUEST_SUCCESS':
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
export const isClosed = (state = null, action) => {
	switch (action.type) {
		case 'FETCH_CLOSED_REQUEST_SUCCESS':
			return action.payload.closed;
		case 'FETCH_CLOSED_REQUEST_FAILURE':
			return null;
		case 'OPEN_POPUP':
			return false;
		case 'CLOSE_POPUP':
		case 'SET_RATING_REQUEST_START':
			return true;
		default:
			return state;
	}
};

/**
 * Ajax data loading reducer
 * @param state
 * @param action
 * @returns {boolean}
 */
export const isFetchingData = (state = null, action) => {
	switch (action.type) {
		case 'FETCH_DATA_START':
			return true;
		case 'FETCH_DATA_END':
			return false;
		default:
			return state;
	}
};

/**
 * Ajax data submitting reducer
 * @param state
 * @param action
 * @returns {*}
 */
export const isSubmittingRating = (state = null, action) => {
	switch (action.type) {
		case 'SET_RATING_REQUEST_START':
			return true;
		case 'SET_RATING_REQUEST_SUCCESS':
		case 'SET_RATING_REQUEST_FAILURE':
			return false;
		default:
			return state;
	}
};

export default combineReducers({rating, isClosed, isFetchingData, isSubmittingRating});