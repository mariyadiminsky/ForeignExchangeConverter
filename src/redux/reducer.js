import update from 'react/lib/update';
import { UPDATE_FIRSTINPUT, UPDATE_SECONDINPUT, UPDATE_FIRSTCURRENCY, UPDATE_SECONDCURRENCY, CONVERT_FIRSTINPUT, CONVERT_SECONDINPUT } from './actions/types';

export default function(state, action) {
	switch(action.type) {
		case UPDATE_FIRSTINPUT:
			return update(state, { firstInputAmount: { $set: action.payload } });
		case UPDATE_SECONDINPUT:
			return update(state, { secondInputAmount: { $set: action.payload } });
		case UPDATE_FIRSTCURRENCY:
			return update(state, { firstInputCurrency: { $set: action.payload } });
		case UPDATE_SECONDCURRENCY:
			return update(state, { secondInputCurrency: { $set: action.payload } });
		case CONVERT_FIRSTINPUT:
			return update(state, { firstInputAmount: { $set: action.payload } });
		case CONVERT_SECONDINPUT:
			return update(state, { secondInputAmount: { $set: action.payload } });
		default:
			return state
	}
	
	return state;
}