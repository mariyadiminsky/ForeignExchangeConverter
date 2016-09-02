import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react/lib/shallowCompare';
import { connect } from 'react-redux';
import { updateAmount, updateCurrency, convertCurrency } from '../redux/actions/actions';

export class Input extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			hasError : ''
		};
	};
	
	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	};
	
	handleFormChange(whichInput, event) {
		const currentNode = event.target
		let isValid = true;
		
		if(currentNode.name === 'amount') {
			let isNotNumber = /^\D+$/.test(currentNode.value);
			let isNegative = Number(currentNode.value) !== Math.abs(currentNode.value);
			
			if(isNotNumber || isNegative) {
				isValid = false;
				this.setState({ hasError: 'Please enter valid amount' });
			};
			
			this.props.updateAmount(whichInput, currentNode.value);
			
			if(currentNode.value === '') {
				const updateOtherInput = (whichInput === 'first') ? 'second' : 'first';
				this.props.updateAmount(updateOtherInput, currentNode.value);
				return;
			};
		};
		
		if(currentNode.name === 'currency') {
			this.props.updateCurrency(whichInput, currentNode.value);
		}
		
		if(isValid && event.currentTarget.amount.value !== '') {
			this.setState({ hasError: '' })
			this.props.convertCurrency(event.currentTarget.amount.value, event.currentTarget.currency.value, whichInput)
		};
	};
	
	render() {
		const { whichInput, firstInputAmount, secondInputAmount } = this.props;
		let inputAmount = (whichInput === 'first') ? firstInputAmount : secondInputAmount;
		
		return (
				<form 
					className='input input-group' 
					onChange={ (event) => this.handleFormChange(whichInput, event) }>
					<div className='col-xs-6'>
						<input 
							name='amount'
							className='form-control input-group form-control-lg input-text'
							value={ inputAmount }
							placeholder='Enter amount' 
						/>
					</div>
					<div className='col-xs-6'>
						<select 
							name='currency'
							className='form-control form-control-lg input-select'>
							<option value='US Dollar'>US Dollar</option>
							<option value='Euro'>Euro</option>
							<option value='British Pound'>British Pound</option>
							<option value='Japanese Yen'>Japanese Yen</option>
							<option value='Indian Rupee'>Indian Rupee</option>
						</select>
					</div>
					<div className='container error-message'>
						{ this.state.hasError }
					</div>
				</form>
		)
	};
};

Input.propTypes = {
	whichInput: React.PropTypes.string.isRequired,
	firstInputAmount: React.PropTypes.oneOfType([
		React.PropTypes.string.isRequired,
		React.PropTypes.number.isRequired
	]),
	secondInputAmount: React.PropTypes.oneOfType([
		React.PropTypes.string.isRequired,
		React.PropTypes.number.isRequired
	]),
	updateAmount: React.PropTypes.func.isRequired,
	updateCurrency: React.PropTypes.func.isRequired,
	convertCurrency: React.PropTypes.func.isRequired,
};

function mapStateToProps({ firstInputAmount = '', secondInputAmount = '' } = {}) {
	return {
		firstInputAmount,
		secondInputAmount
	};
};

export default connect(mapStateToProps, { updateAmount, updateCurrency, convertCurrency })(Input);