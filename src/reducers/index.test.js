import rootReducer, * as reducers from './index';

describe('reducers', () => {

	describe('rootReducer', () => {
		it('should return the initial state', () => {
			expect(rootReducer(undefined, {})).toEqual({
				rating: null,
				isClosed: null,
				isFetchingData: null,
				isSubmittingRating: null
			})
		});
	});

	describe('rating reducer', () => {
		it('should return the initial state', () => {
			expect(reducers.rating(undefined, {})).toEqual(null)
		});

		it('should handle FETCH_RATING_REQUEST_SUCCESS', () => {
			const action = {
				type: 'FETCH_RATING_REQUEST_SUCCESS',
				payload: {rating: 5}
			};

			expect(reducers.rating(undefined, action)).toEqual(action.payload.rating);
		});

		it('should handle SET_RATING_REQUEST_SUCCESS', () => {
			const action = {
				type: 'FETCH_RATING_REQUEST_SUCCESS',
				payload: {rating: 5}
			};

			expect(reducers.rating(undefined, action)).toEqual(action.payload.rating);
		});

		it('should handle FETCH_RATING_REQUEST_FAILURE', () => {
			const action = {
				type: 'FETCH_RATING_REQUEST_FAILURE'
			};

			expect(reducers.rating(undefined, action)).toEqual(null);
		});
	});

	describe('isClosed reducer', () => {
		it('should return the initial state', () => {
			expect(reducers.isClosed(undefined, {})).toEqual(null)
		});

		it('should handle FETCH_CLOSED_REQUEST_SUCCESS', () => {
			const action = {
				type: 'FETCH_CLOSED_REQUEST_SUCCESS',
				payload: {closed: false}
			};

			expect(reducers.isClosed(undefined, action)).toEqual(false);
		});

		it('should handle FETCH_CLOSED_REQUEST_FAILURE', () => {
			const action = {
				type: 'FETCH_CLOSED_REQUEST_FAILURE',
			};

			expect(reducers.isClosed(undefined, action)).toEqual(null);
		});

		it('should handle OPEN_POPUP', () => {
			const action = {
				type: 'OPEN_POPUP',
			};

			expect(reducers.isClosed(undefined, action)).toEqual(false);
		});

		it('should handle CLOSE_POPUP', () => {
			const action = {
				type: 'CLOSE_POPUP',
			};

			expect(reducers.isClosed(undefined, action)).toEqual(true);
		});

		it('should handle SET_RATING_REQUEST_START', () => {
			const action = {
				type: 'SET_RATING_REQUEST_START',
			};

			expect(reducers.isClosed(undefined, action)).toEqual(true);
		});
	});

	describe('isFetchingData reducer', () => {
		it('should return the initial state', () => {
			expect(reducers.isFetchingData(undefined, {})).toEqual(null)
		});

		it('should handle FETCH_DATA_START', () => {
			const action = {
				type: 'FETCH_DATA_START',
			};

			expect(reducers.isFetchingData(undefined, action)).toEqual(true);
		});

		it('should handle FETCH_DATA_START', () => {
			const action = {
				type: 'FETCH_DATA_END',
			};

			expect(reducers.isFetchingData(undefined, action)).toEqual(false);
		});
	});

	describe('isSubmittingRating reducer', () => {
		it('should return the initial state', () => {
			expect(reducers.isSubmittingRating(undefined, {})).toEqual(null)
		});

		it('should handle SET_RATING_REQUEST_START', () => {
			const action = {
				type: 'SET_RATING_REQUEST_START',
			};

			expect(reducers.isSubmittingRating(undefined, action)).toEqual(true);
		});

		it('should handle SET_RATING_REQUEST_SUCCESS', () => {
			const action = {
				type: 'SET_RATING_REQUEST_SUCCESS',
			};

			expect(reducers.isSubmittingRating(undefined, action)).toEqual(false);
		});

		it('should handle SET_RATING_REQUEST_FAILURE', () => {
			const action = {
				type: 'SET_RATING_REQUEST_FAILURE',
			};

			expect(reducers.isSubmittingRating(undefined, action)).toEqual(false);
		});
	});
});