import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import {combineReducers, createStore} from 'redux';
import {reducer} from './state/reducers';

import {Provider} from 'react-redux';

const monsterReducer = combineReducers({
    general: reducer,
})
const store = createStore(monsterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, rootElement);
