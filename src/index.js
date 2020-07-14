import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

//this gives access to redux store and reducers
import{Provider} from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store';

//wrap everything in provider because you want everything to have access to store object
//provider is the parent to everything in application
//allows us to get access to everything related to store
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


