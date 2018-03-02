import {
  GET_EVENTS,
  GET_USER_SUCCESS,
} from './EventTypes'

import axios from 'axios';

// Events取得成功
export function getEventsSuccess(events) {
    return {
        type: GET_USER_SUCCESS,
        events
    };
}

// Events取得
export function getEvents() {
  return (dispatch) => {
    return axios
      .get('http://localhost:3000/events')
      .then(events => {
        dispatch(getEventsSuccess(events.data));
        // console.warn(repos.data);
      })
      .catch(err => {
        throw err;
      });
  };
}
