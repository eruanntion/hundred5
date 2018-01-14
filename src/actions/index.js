import axios from 'axios';

/**
 * Set rating action creator
 * @param rating
 * @returns {{type: string, rating: *}}
 */
export const setRatingAction = (rating) => (dispatch) => {
	dispatch({type: 'SET_RATING_REQUEST_START'});

	return axios
		.post('/rating', {rating})
		.then(() => dispatch(({type: 'SET_RATING_REQUEST_SUCCESS', payload: {rating}})))
		.catch(() => dispatch({type: 'SET_RATING_REQUEST_FAILURE'}));
};

/**
 * Close popup action creator
 * @returns {{type: string}}
 */
export const closePopupAction = () => (dispatch) => {
	dispatch({type: 'CLOSE_POPUP'});

	return axios
		.put('/closed', {closed: true})
		.catch(() => dispatch({type: 'CLOSE_POPUP_REQUEST_FAILURE'}));
};

/**
 * Open popup action creator
 * @returns {{type: string}}
 */
export const openPopupAction = () => ({type: 'OPEN_POPUP'});

/**
 * Fetch popup status (closed or not)
 * GET /feedback/closed
 * @returns {function(*): Promise<T>}
 */
export const fetchClosedAction = () => (dispatch) => axios
	.get('/closed')
	.then(response => dispatch({type: 'FETCH_CLOSED_REQUEST_SUCCESS', payload: response.data}))
	.catch(() => dispatch({type: 'FETCH_CLOSED_REQUEST_FAILURE'}));

/**
 * Fetch rating action creator
 * GET /feedback/rating
 * @returns {function(*): Promise<T>}
 */
export const fetchRatingAction = () => (dispatch) => axios
	.get('/rating')
	.then(response => dispatch({type: 'FETCH_RATING_REQUEST_SUCCESS', payload: response.data}))
	.catch(() => dispatch({type: 'FETCH_RATING_REQUEST_FAILURE'}));

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

