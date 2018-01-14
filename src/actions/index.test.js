import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as actions from './index';

// Create mock axios
const moxios = new MockAdapter(axios);

// Create mock store
const mockStore = configureMockStore([thunk]);

/**
 * Sync actions tests
 */
describe('actions', () => {

	describe('openPopupAction', () => {
		it('should create OPEN_POPUP', () => {
			const expectedAction = {
				type: 'OPEN_POPUP'
			};

			expect(actions.openPopupAction()).toEqual(expectedAction);
		});
	});

});

/**
 * Async actions tests
 */
describe('async actions', () => {
	afterEach(() => {
		moxios.reset();
	});

	describe('fetchRatingAction', () => {

		it('should create FETCH_RATING_REQUEST_SUCCESS with payload containing rating when request is successful', async () => {
			const store = mockStore({});
			const ratingPayload = {rating: 8};

			moxios.onGet('/rating').reply(200, {rating: 8});
			await store.dispatch(actions.fetchRatingAction());
			expect(store.getActions()[0]).toEqual({type: 'FETCH_RATING_REQUEST_SUCCESS', payload: ratingPayload});
		});

		it('should create FETCH_RATING_REQUEST_FAILURE when request fails', async () => {
			const store = mockStore({});

			moxios.onGet('/rating').reply(400);
			await store.dispatch(actions.fetchRatingAction());
			expect(store.getActions()[0]).toEqual({type: 'FETCH_RATING_REQUEST_FAILURE'});

		})
	});

	describe('fetchClosedAction', () => {

		it('should create FETCH_CLOSED_REQUEST_SUCCESS with payload containing closed value', async () => {
			const store = mockStore({});
			const closedPayload = {closed: false};

			moxios.onGet('/closed').reply(200, {closed: false});
			await store.dispatch(actions.fetchClosedAction());
			expect(store.getActions()[0]).toEqual({type: 'FETCH_CLOSED_REQUEST_SUCCESS', payload: closedPayload});
		});

		it('should create FETCH_CLOSED_REQUEST_FAILURE when request fails', async () => {
			const store = mockStore({});

			moxios.onGet('/closed').reply(400);
			await store.dispatch(actions.fetchClosedAction());
			expect(store.getActions()[0]).toEqual({type: 'FETCH_CLOSED_REQUEST_FAILURE'});

		})
	});

	describe('fetchDataAction', () => {

		it('should create actions FETCH_DATA_START, FETCH_CLOSED_REQUEST_SUCCESS, FETCH_RATING_REQUEST_SUCCESS, FETCH_DATA_END in that order', async () => {
			const store = mockStore({});
			const ratingPayload = {rating: 8};
			const closedPayload = {closed: false};

			moxios.onGet('/closed').reply(200, closedPayload);
			moxios.onGet('/rating').reply(200, ratingPayload);

			await store.dispatch(actions.fetchDataAction());
			expect(store.getActions()).toEqual([
				{type: 'FETCH_DATA_START'},
				{type: 'FETCH_CLOSED_REQUEST_SUCCESS', payload: closedPayload},
				{type: 'FETCH_RATING_REQUEST_SUCCESS', payload: ratingPayload},
				{type: 'FETCH_DATA_END'}
			]);
		});

	});

	describe('setRatingAction', () => {

		it('should create SET_RATING_REQUEST_START and SET_RATING_REQUEST_SUCCESS action with successful request', async () => {
			const store = mockStore({});
			const ratingPayload = {rating: 8};

			moxios.onPost('/rating').reply(200);

			await store.dispatch(actions.setRatingAction(ratingPayload.rating));
			expect(store.getActions()).toEqual([
				{type: 'SET_RATING_REQUEST_START'},
				{type: 'SET_RATING_REQUEST_SUCCESS', payload: ratingPayload}
			]);
		});

	});

	it('should create SET_RATING_REQUEST_START and SET_RATING_REQUEST_FAILURE action with failed request', async () => {
		const store = mockStore({});

		moxios.onPost('/rating').reply(400);
		await store.dispatch(actions.setRatingAction());
		expect(store.getActions()).toEqual([
			{type: 'SET_RATING_REQUEST_START'},
			{type: 'SET_RATING_REQUEST_FAILURE'}
		]);
	});

});