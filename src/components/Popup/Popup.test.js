import React from 'react'
import {mount, render} from 'enzyme';
import Popup from './Popup';

const setup = (props) => {
	props = {
		rating: null,
		onClose: jest.fn(),
		onStarClick: jest.fn(),
		...props
	};

	const wrapper = mount(<Popup {...props} />);

	return {props, wrapper};
};

describe('Popup component', () => {
	it('should render properly', () => {
		const {wrapper} = setup();

		//console.log(wrapper.debug());
		expect(wrapper.find('.Popup__header').length).toBe(1);
		expect(wrapper.find('.Popup__header-text').length).toBe(1);
		expect(wrapper.find('.Popup__close').length).toBe(1);
		expect(wrapper.find('.Popup__body').length).toBe(1);
		expect(wrapper.find('Star').length).toBe(11);
	});

	it('should handle close', () => {
		const {wrapper, props} = setup();
		const prevNumberOfCalls = props.onClose.mock.calls.length;

		wrapper.find('.Popup__close').simulate('click');
		expect(props.onClose.mock.calls.length).toBe(prevNumberOfCalls + 1);
	});

	it('should handle star click', () => {
		const {wrapper, props} = setup();
		const prevNumberOfCalls = props.onStarClick.mock.calls.length;

		wrapper.find('.Star__image').first().simulate('click');
		expect(props.onStarClick.mock.calls.length).toBe(prevNumberOfCalls + 1);
	});

	it('should change state on mouse hovering a star', () => {
		const {wrapper} = setup();

		expect(wrapper.state().suggestedRating).toBe(null);
		wrapper.find('.Star__image').last().simulate('mouseenter');
		expect(wrapper.state().suggestedRating).toBe(10);
		wrapper.find('.Star__image').last().simulate('mouseleave');
		expect(wrapper.state().suggestedRating).toBe(null);

	});
});