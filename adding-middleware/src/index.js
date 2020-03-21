import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,combineReducers,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import reducerCounter from './Store/Reducers/counter';
import reducerResult from './Store/Reducers/result';

const rootRecucer = combineReducers({
    ctr: reducerCounter,
    res: reducerResult
});

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

const store = createStore(rootRecucer,applyMiddleware(logger));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();