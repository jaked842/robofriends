import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './Containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { searchRobots } from './Reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger, thunkMiddleware))

ReactDOM.render(
  <Provider store={ store } >
    <App />
  </Provider >
  
  
  ,document.getElementById('root')
);
