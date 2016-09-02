import React, { Component } from 'react';
import InputList from './InputList';
import '../../client/styles.css';

export class App extends Component {
	render() {
		return(
			<div className='container'>
				<InputList />
			</div>
		)
	};
};

export default App;