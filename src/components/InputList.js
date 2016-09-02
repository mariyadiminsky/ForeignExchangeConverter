import React, { Component, PropTypes } from 'react';
import Input from './Input';

export class InputList extends Component {
	render() {
		return(
			<div className='container input-list'>
				<h2 className='text-xs-center'> 
					Foreign Exchange Converter
				</h2><br />
				<Input whichInput={'first'} /><br />
				<Input whichInput={'second'} />
			</div>
		)
	};
};

export default InputList;