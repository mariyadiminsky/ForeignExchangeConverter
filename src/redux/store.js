import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import initialState from  '../initialState';
import throttle from 'lodash/throttle';

const enhancer = compose(
	applyMiddleware(thunk, logger()),
);

const store = createStore(reducer, initialState, enhancer);

//store.subscribe(throttle(() => {
//  store.getState();
//}), 1000)

export default store;