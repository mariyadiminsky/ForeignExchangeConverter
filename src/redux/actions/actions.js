import { UPDATE_FIRSTINPUT, UPDATE_SECONDINPUT, UPDATE_FIRSTCURRENCY, UPDATE_SECONDCURRENCY, CONVERT_FIRSTINPUT, CONVERT_SECONDINPUT } from './types';

export function convertCurrency(theAmount, currencyGiven, whichInput) {
	return function(dispatch, getState) {
		const currencyToConvertTo = (whichInput === 'first') ? getState().secondInputCurrency : getState().firstInputCurrency;
		let amount = Number(theAmount);
		let convertedAmount = amount;
		
		if(currencyGiven !== currencyToConvertTo) startConversion();
		
		function startConversion() {
			switch(currencyGiven) {
				case 'US Dollar':
					switch(currencyToConvertTo){
						case 'Euro':
							convertedAmount = amount * 0.89;
							return;
						case 'British Pound':
							convertedAmount = amount * 0.75;
							return;
						case 'Japanese Yen':
							convertedAmount = amount * 103.29;
							return;
						case 'Indian Rupee':
							convertedAmount = amount * 66.81;
							return;
					}
				case 'Euro':
					switch(currencyToConvertTo){
						case 'US Dollar':
							convertedAmount = amount * 1.12;
							return;
						case 'British Pound':
							convertedAmount = amount * 0.84;
							return;
						case 'Japanese Yen':
							convertedAmount = amount * 115.70;
							return;
						case 'Indian Rupee':
							convertedAmount = amount * 74.84;
							return;
					}
				case 'British Pound':
					switch(currencyToConvertTo){
						case 'US Dollar':
							convertedAmount = amount * 1.33;
							return;
						case 'Euro':
							convertedAmount = amount * 1.18;
							return;
						case 'Japanese Yen':
							convertedAmount = amount * 137.10;
							return;
						case 'Indian Rupee':
							convertedAmount = amount * 88.66;
							return;
					}
				case 'Japanese Yen' :
					switch(currencyToConvertTo){
						case 'US Dollar':
							convertedAmount = amount * 0.0097;
							return;
						case 'Euro':
							convertedAmount = amount * 0.0086;
							return;
						case 'British Pound':
							convertedAmount = amount * 0.0073;
							return;
						case 'Indian Rupee':
							convertedAmount = amount * 0.65;
							return;
					}
				case 'Indian Rupee':
					switch(currencyToConvertTo){
						case 'US Dollar':
							convertedAmount = amount * 0.015;
							return;
						case  'Euro':
							convertedAmount = amount * 0.013;
							return;
						case  'British Pound':
							convertedAmount = amount * 0.011;
							return;
						case 'Japanese Yen':
							convertedAmount = amount * 1.55;
							return;
					}
			default:
				return;
			};
		};
		
		convertedAmount = parseFloat(convertedAmount.toFixed(4));
		
		if(whichInput === 'first'){
			dispatch({
				type: CONVERT_SECONDINPUT,
				payload: convertedAmount
			});
		}else {
			dispatch({
				type: CONVERT_FIRSTINPUT,
				payload: convertedAmount
			});
		};
	};
};

export function updateAmount(whichInput, amount) {
	if(whichInput === 'first') {
		return {
			type: UPDATE_FIRSTINPUT,
			payload: amount
		};
	}else {
		return {
			type: UPDATE_SECONDINPUT,
			payload: amount
		};
	};
};

export function updateCurrency(whichInput, currency) {
	if(whichInput === 'first') {
		return {
			type: UPDATE_FIRSTCURRENCY,
			payload: currency
		};
	}else {
		return {
			type: UPDATE_SECONDCURRENCY,
			payload: currency
		};
	};
};