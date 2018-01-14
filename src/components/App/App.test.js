import React from 'react';
import {shallow} from 'enzyme';
import {App} from './App';

const setup = (props) => {
	props = {
		openPopupAction: jest.fn(),
		closePopupAction: jest.fn(),
		setRatingAction: jest.fn(),
		fetchDataAction: jest.fn(),
		...props
	};

	const wrapper = shallow(<App {...props} />);

	return {props, wrapper};
};

describe('App component', () => {
	it('should render properly', () => {
		const {wrapper} = setup();

		expect(wrapper.find('header').hasClass('App__header')).toBe(true);
		expect(wrapper.find('img').first().hasClass('App__logo')).toBe(true);
		expect(wrapper.find('.App__container').length).toBe(1);
		expect(wrapper.find('footer').hasClass('App__footer')).toBe(true);
	});

	it('should render \'Loading data...\' on initialization', () => {
		const {wrapper} = setup({isFetchingData: true});

		expect(wrapper.find('.App__container').text()).toBe('Loading data...');
	});

	it('should render \'Submitting rating...\' on rating submission', () => {
		const {wrapper} = setup({isSubmittingRating: true});

		expect(wrapper.find('.App__container').text()).toBe('Submitting rating...');
	});

	it('should render star with submitted rating if rating has been submitted', () => {
		const {wrapper} = setup({rating: 5});

		const submittedRating = wrapper.find('.App__submitted-rating');
		expect(submittedRating.length).toBe(1);
		expect(submittedRating.text().trim()).toBe('5');
		expect(submittedRating.find('img').length).toBe(1);
		expect(submittedRating.find('img').prop('src')).toBe('star-active.svg');
	});

	it('should show message if popup has been closed', () => {
		const {wrapper} = setup({isClosed: true, rating: null});

		expect(wrapper.find('.App__open-popup').length).toBe(1);
	});

	it('should render Popup component if rating has not been set and Popup has not been closed', () => {
		const {wrapper} = setup({isClosed: false, rating: null});

		expect(wrapper.find('Popup').length).toBe(1);
	});

	it('should render \'Couldn\'t load data from the server\' in case of error', () => {
		const {wrapper} = setup({isClosed: null, rating: null});

		expect(wrapper.find('.App__container').text()).toBe('Couldn\'t load data from the server');
	});
});
