import React from 'react';
import {shallow, mount} from 'enzyme';
import {App} from './App';

const setupShallow = (props) => {
	props = {
		fetchDataAction: jest.fn(),
		...props
	};

	const wrapper = shallow(<App {...props} />);
	return {props, wrapper};
};

const setupMount = (props) => {
	props = {
		openPopupAction: jest.fn(),
		closePopupAction: jest.fn(),
		setRatingAction: jest.fn(),
		fetchDataAction: jest.fn(),
		...props
	};

	const wrapper = mount(<App {...props} />);
	return {props, wrapper};
};

describe('App component', () => {
	describe('rendering', () => {
		it('should render properly', () => {
			const {wrapper} = setupShallow();

			expect(wrapper.find('header').hasClass('App__header')).toBe(true);
			expect(wrapper.find('img').first().hasClass('App__logo')).toBe(true);
			expect(wrapper.find('.App__container').length).toBe(1);
			expect(wrapper.find('footer').hasClass('App__footer')).toBe(true);
		});

		it('should render \'Loading data...\' on initialization', () => {
			const {wrapper} = setupShallow({isFetchingData: true});

			expect(wrapper.find('.App__container').text()).toBe('Loading data...');
		});

		it('should render \'Submitting rating...\' on rating submission', () => {
			const {wrapper} = setupShallow({isSubmittingRating: true});

			expect(wrapper.find('.App__container').text()).toBe('Submitting rating...');
		});

		it('should render star with submitted rating if rating has been submitted', () => {
			const {wrapper} = setupShallow({rating: 5});

			const submittedRating = wrapper.find('.App__submitted-rating');
			expect(submittedRating.length).toBe(1);
			expect(submittedRating.text().trim()).toBe('5');
			expect(submittedRating.find('img').length).toBe(1);
			expect(submittedRating.find('img').prop('src')).toBe('star-active.svg');
		});

		it('should show message if popup has been closed', () => {
			const {wrapper} = setupShallow({isClosed: true, rating: null});

			expect(wrapper.find('.App__open-popup').length).toBe(1);
		});

		it('should render Popup component if rating has not been set and Popup has not been closed', () => {
			const {wrapper} = setupShallow({isClosed: false, rating: null});

			expect(wrapper.find('Popup').length).toBe(1);
		});

		it('should render \'Couldn\'t load data from the server\' in case of error', () => {
			const {wrapper} = setupShallow({isClosed: null, rating: null});

			expect(wrapper.find('.App__container').text()).toBe('Couldn\'t load data from the server');
		});
	});

	describe('action calls', () => {
		it('should call setRatingAction on star click', () => {
			const {wrapper, props} = setupMount({isClosed: false, rating: null});
			const prevNumberOfCalls = props.setRatingAction.mock.calls.length;

			wrapper.find('.Star .Star__image').first().simulate('click');

			expect(props.setRatingAction.mock.calls.length).toBe(prevNumberOfCalls + 1);
		});

		it('should call closePopupAction on cross click', () => {
			const {wrapper, props} = setupMount({isClosed: false, rating: null});
			const prevNumberOfCalls = props.closePopupAction.mock.calls.length;

			wrapper.find('.Popup__close').simulate('click');

			expect(props.closePopupAction.mock.calls.length).toBe(prevNumberOfCalls + 1);
		});

		it('should call openPopupAction on click', () => {
			const {wrapper, props} = setupMount({isClosed: true, rating: null});
			const prevNumberOfCalls = props.closePopupAction.mock.calls.length;

			wrapper.find('.App__open-popup').simulate('click');

			expect(props.openPopupAction.mock.calls.length).toBe(prevNumberOfCalls + 1);
		});
	});
});
