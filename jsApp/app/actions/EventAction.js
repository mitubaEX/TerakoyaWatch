import {
  GET_EVENTS,
  GET_USER_SUCCESS,
  GET_EVENTS_FROM_FIREBASE,
} from './EventTypes'

import axios from 'axios';
import firebase from '../firebase/firebase'

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

export function getFirebaseData () {
  return async (dispatch) => {
    const firebaseData = ((await firebase.database().ref('data').once('value')).val())
    dispatch(getEventsFromFirebase(firebaseData))
  }
}

export function getEventsFromFirebase(events) {
  return {
    type: GET_EVENTS_FROM_FIREBASE,
    events
  }
}
