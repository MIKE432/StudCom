import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './state/rootReducer';
import rootSaga from './sagas/rootSaga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

export const history = createBrowserHistory();
const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['user'],
    stateReconciler: autoMergeLevel2
}

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default function initStateAndSagas() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const routerMiddleWare = routerMiddleware(history);
    const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleWare)));
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);

    return { store, persistor };
}
