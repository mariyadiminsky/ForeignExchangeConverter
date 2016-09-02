import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { InputList } from '../../components/InputList';
import Input from '../../components/Input';

describe('InputList', () => {
	let wrapper;
	
	beforeEach(() => {
		wrapper = shallow(
			<InputList />
		)
	});
		
	it('should render self and subcomponents', () => {
		expect(wrapper.length).toEqual(1);
		expect(wrapper.find('div').length).toEqual(1);
		expect(wrapper.find('div').hasClass('container input-list')).toEqual(true);	
		expect(wrapper.find('h2').length).toEqual(1);
		expect(wrapper.find('h2').hasClass('text-xs-center')).toEqual(true);
		expect(wrapper.find('h2').text()).toBe('Foreign Exchange Converter');
		expect(wrapper.find(Input).length).toEqual(2);
		expect(wrapper.find(Input).at(0).prop('whichInput')).toBe('first');
		expect(wrapper.find(Input).at(1).prop('whichInput')).toBe('second');
	});
});