import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { makeStore } from './redux/reducers';
import App from './App';
import { StoreContext } from 'redux-react-hook';

import './App.scss';

const {store} = makeStore();


    ReactDOM.render(
        <StoreContext.Provider value={store}>
        
            <App store={store} />

        </StoreContext.Provider>
        , document.getElementById('root'));
        serviceWorker.register();
