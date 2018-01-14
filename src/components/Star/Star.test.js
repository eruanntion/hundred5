import React from 'react'
import {mount} from 'enzyme';
import Star from './Star';

const setup = (props) => {
	props = {
		onMouseEnter: jest.fn(),
		onMouseLeave: jest.fn(),
		onClick: jest.fn(),
		...props
	};

	const wrapper = mount(<Star {...props} />);

	return {props, wrapper};
};

describe('Star component', () => {
	it('should render properly', () => {
		const {wrapper} = setup();

		expect(wrapper.find('img').hasClass('Star__image')).toBe(true);
		expect(wrapper.find('span').hasClass('Star__text')).toBe(true);
	});

	it('should render correct number', () => {
		const number = 5;
		const {wrapper} = setup({number});

		expect(parseInt(wrapper.find('span').text())).toBe(number);
	});

	it('should render star-default if isActive is false', () => {
		const {wrapper} = setup({isActive: false});

		expect(wrapper.find('img').prop('src')).toBe('star-default.svg');
	});

	it('should render star-active if isActive is true', () => {
		const {wrapper} = setup({isActive: true});

		expect(wrapper.find('img').prop('src')).toBe('star-active.svg');
	});

	it('should handle onMouseEnter', () => {
		const {wrapper, props} = setup();
		const prevNumberOfCalls = props.onMouseEnter.mock.calls.length;

		wrapper.find('img').simulate('mouseenter');
		expect(props.onMouseEnter.mock.calls.length).toBe(prevNumberOfCalls + 1);
	});

	it('should handle onMouseLeave', () => {
		const {wrapper, props} = setup();
		const prevNumberOfCalls = props.onMouseLeave.mock.calls.length;

		wrapper.find('img').simulate('mouseleave');
		expect(props.onMouseLeave.mock.calls.length).toBe(prevNumberOfCalls + 1);
	});

	it('should handle onClick', () => {
		const {wrapper, props} = setup();
		const prevNumberOfCalls = props.onClick.mock.calls.length;

		wrapper.find('img').simulate('click');
		expect(props.onClick.mock.calls.length).toBe(prevNumberOfCalls + 1);
	});
});
