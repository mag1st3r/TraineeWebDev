import React from 'react';
import ReactDOM from 'react-dom';
import {  Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import App from './components/app/app';
import store from "./store";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import TraineeWebService from "./services/trainee-web-service";
import { TraineeWebServiceProvider } from './components/trainee-web-serevice-context/trainee-web-service-context'

const traineeWebService = new TraineeWebService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<TraineeWebServiceProvider value={traineeWebService}>
				<Router>
					<App />
				</Router>
			</TraineeWebServiceProvider>
		</ErrorBoundry>
	</Provider>
	, document.getElementById('root'));

