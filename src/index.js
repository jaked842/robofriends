import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './Containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './Redux/Reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware))



ReactDOM.render(
  <Provider store={ store } >
    <App />
  </Provider >
  
  
  ,document.getElementById('root')
);
