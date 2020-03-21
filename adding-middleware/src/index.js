import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,combineReducers} from 'redux';
import { Provider } from 'react-redux';

import reducerCounter from './Store/Reducers/counter';
import reducerResult from './Store/Reducers/result';

const rootRecucer = combineReducers({
    ctr: reducerCounter,
    res: reducerResult
});

const store = createStore(rootRecucer);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();