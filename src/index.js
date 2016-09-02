import React from 'react'
import { render } from 'react-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import App from './components/App'
import initialState from  './initialState'

let display = document.getElementById('app');

render(
	<Provider store={store}>
		<App />
	</Provider>, display)

window.React = React // enable debugger