import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import {combineReducers} from 'redux';
import {reducer} from './state/reducers';

const monsterReducer = combineReducers({
    general: reducer,
})

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
