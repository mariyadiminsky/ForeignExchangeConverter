import React from 'react';
import { shallow, mount } from 'enzyme';
import expect, { createSpy } from 'expect';
import { Input } from '../../components/Input';

function setup() {
	const firstInputProps = {
		whichInput: 'first',
		firstInputAmount: '',
		secondInputAmount: '',
		hasError: '',
		handleFormChange: expect.createSpy(),
		updateAmount: expect.createSpy(),
		updateCurrency: expect.createSpy(),
		convertCurrency: expect.createSpy()
	};
	
	const secondInputProps = {
		whichInput: 'second',
		firstInputAmount: '',
		secondInputAmount: '',
		hasError: '',
		handleFormChange: expect.createSpy(),
		updateAmount: expect.createSpy(),
		updateCurrency: expect.createSpy(),
		convertCurrency: expect.createSpy()
	};
	
	const firstWrapper = shallow(
		<Input { ...firstInputProps } />
	)
	
	const secondWrapper = shallow(
		<Input { ...secondInputProps } />
	)
	
	return {
		firstWrapper,
		secondWrapper,
		firstInputProps,
		secondInputProps
	}
};

describe('Input', () => {
	let firstWrapper;
	let secondWrapper;
	let firstInputProps
	let secondInputProps;
	let props;
	
	beforeEach(() => {
		( { firstWrapper, secondWrapper, firstInputProps, secondInputProps } = setup() );
	});
		
	it('should render self and subcomponents', () => {
		expect(firstWrapper.length).toEqual(1);
		expect(firstWrapper.find('form').length).toEqual(1);
		expect(firstWrapper.find('form').hasClass('input input-group')).toEqual(true);
		expect(firstWrapper.find('form').prop('onChange').length).toEqual(1);
		expect(firstWrapper.find('form').find('div').length).toEqual(3);
		expect(firstWrapper.find('form').find('div').at(0).hasClass('col-xs-6')).toEqual(true);
		expect(firstWrapper.find('form').find('div').at(1).hasClass('col-xs-6')).toEqual(true);
		expect(firstWrapper.find('form').find('div').at(2).hasClass('container error-message')).toEqual(true);
		expect(firstWrapper.find('form').find('input').length).toEqual(1);
		expect(firstWrapper.find('input').hasClass('form-control input-group form-control-lg input-text')).toEqual(true);
		expect(firstWrapper.find('input').prop('name')).toBe('amount');
		expect(firstWrapper.find('input').prop('value')).toBe(firstInputProps.firstInputAmount);
		expect(secondWrapper.find('input').prop('value')).toBe(secondInputProps.secondInputAmount);
		expect(secondWrapper.find('input').prop('placeholder')).toBe('Enter amount');
		expect(firstWrapper.find('form').find('select').length).toEqual(1);
		expect(firstWrapper.find('select').hasClass('form-control form-control-lg input-select')).toEqual(1);
		expect(firstWrapper.find('select').prop('name')).toBe('currency');
		expect(firstWrapper.find('select').find('option').length).toEqual(5);
		expect(firstWrapper.find('option').at(0).text()).toBe('US Dollar');
		expect(firstWrapper.find('option').at(1).text()).toBe('Euro');
		expect(firstWrapper.find('option').at(2).text()).toBe('British Pound');
		expect(firstWrapper.find('option').at(3).text()).toBe('Japanese Yen');
		expect(firstWrapper.find('option').at(4).text()).toBe('Indian Rupee');
		expect(firstWrapper.find('div').at(2).text()).toBe(firstInputProps.hasError);	
	});
	
	it('should trigger handleFormChange on input change', () => {
		const testWrapper = mount(
			<Input { ...firstInputProps } onChange={ firstInputProps.handleFormChange } />
		)
		
		testWrapper.props().onChange(3);
		expect(firstInputProps.handleFormChange).toHaveBeenCalled();
		expect(firstInputProps.handleFormChange.calls.length).toEqual(1);
	});
});