import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from './routes/routes';


const App = ({ store }:any) => (

	
	<Provider store={store}>
	<Routes />
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
