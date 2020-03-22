import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,combineReducers,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import reducerCounter from './store/reducers/counter';
import reducerResult from './store/reducers/result';

const rootRecucer = combineReducers({
    ctr: reducerCounter,
    res: reducerResult
});

//Useful links:
// Middleware: https://redux.js.org/advanced/middleware/

// redux-thunk package: https://github.com/gaearon/redux-thunk

// Async Actions: https://redux.js.org/advanced/async-actions

//Dive deeper into redux on redux.js.org
//There are recipes there
//See especially Immutable Update Patterns in Structuring Reducers

//Add npm install --save redux-thunk
// For handling asunc calls

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
const store = createStore(rootRecucer,composeEnhansers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();