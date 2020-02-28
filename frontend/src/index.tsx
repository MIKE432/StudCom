import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import initStateAndSagas, { history } from './configuration/initStateAndSagas';

const store = initStateAndSagas();
ReactDOM.render(
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>
, document.getElementById('root'));


serviceWorker.unregister();
