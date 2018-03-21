/* @flow */
import { combineReducers } from 'redux';
import events from './EventReducers';

const todoApp = combineReducers({
  events
});

export default todoApp;
