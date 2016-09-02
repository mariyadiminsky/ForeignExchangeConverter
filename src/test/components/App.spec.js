import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { App } from '../../components/App';
import InputList from '../../components/InputList';

describe('App', () => {
	let wrapper;
	
	beforeEach(() => {
		wrapper = shallow(
			<App />
		)
	});
		
	it('should render self and subcomponents', () => {
		expect(wrapper.length).toEqual(1);
		expect(wrapper.find(InputList).length).toEqual(1);
		expect(wrapper.find('div').length).toEqual(1);
		expect(wrapper.find('div').hasClass('container')).toEqual(true);	
	});
});