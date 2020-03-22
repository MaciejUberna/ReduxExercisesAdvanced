import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,combineReducers,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import reducerCounter from './Store/Reducers/counter';
import reducerResult from './Store/Reducers/result';

const rootRecucer = combineReducers({
    ctr: reducerCounter,
    res: reducerResult
});

//installed Redux DevTools plugin on chrome
//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=pl
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dsispatching: ',action);
            const result = next(action);
            console.log('[Middlewere] next state',store.getState());
            return result;
        }
    }
}

//Applied composeEnhansers to store to applyMiddleware
const store = createStore(rootRecucer,composeEnhansers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();