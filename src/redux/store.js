//need to add middleware so whenever an action is dispatched, we can catch them and display them

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger' //middleware

import rootReducer from './root-reducer';

//set up middleware
//the middleware the store is expecting from redux is an array

const middlewares = [logger];

//creates store
//will spread in all the methods from the array into the function call as individual elements
    //this way if we need to add more middleware we can just add it to the above array

const store = createStore(rootReducer, applyMiddleware(...middlewares))

//pass store into provider in index.js
export default store;