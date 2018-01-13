import axios from 'axios';

/**
 * Set rating action creator
 * @param rating
 * @returns {{type: string, rating: *}}
 */
export const setRatingAction = (rating) => ({type: 'SET_RATING', rating});

/**
 * Close popup action creator
 * @returns {{type: string}}
 */
export const closePopupAction = () => ({type: 'CLOSE_POPUP'});

/**
 * Fetch popup status (closed or not)
 * GET /feedback/closed
 * @returns {function(*): Promise<T>}
 */
export const fetchClosedAction = () => (dispatch) => axios
	.get('/feedback/closed')
	.then(response => dispatch({type: 'FETCH_CLOSED_SUCCESS', payload: response.data}))
	.catch(err => dispatch({type: 'FETCH_CLOSED_FAILURE', err}));

/**
 * Fetch rating
 * GET /feedback/rating
 * @returns {function(*): Promise<T>}
 */
export const fetchRatingAction = () => (dispatch) => axios
	.get('/feedback/rating')
	.then(response => dispatch({type: 'FETCH_RATING_SUCCESS', payload: response.data}))
	.catch(err => dispatch({type: 'FETCH_RATING_FAILURE', err}));

/**
 * Fetch all data from API (rating & closed)
 * @returns {function(*)}
 */
export const fetchDataAction = () => (dispatch) => {
	dispatch({type: 'FETCH_DATA_START'});

	return Promise.all([
		dispatch(fetchClosedAction()),
		dispatch(fetchRatingAction())
	]).then(() => dispatch({type: 'FETCH_DATA_END'}));
};

