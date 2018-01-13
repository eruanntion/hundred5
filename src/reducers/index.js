import {combineReducers} from 'redux';

/**
 * Rating reducer
 * @param state
 * @param action
 * @returns {*}
 */
const rating = (state = null, action) => {
	switch (action.type) {
		case 'SET_RATING':
			return action.rating;
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
		case 'CLOSE_POPUP':
			return true;
		default:
			return state;
	}
};

export default combineReducers({rating, isClosed});