/* @flow */
import axios from 'axios';

import {
  GET_USER_SUCCESS,
  GET_EVENTS_FROM_FIREBASE_SUCCESS,
} from './EventTypes';

import firebase from '../firebase/firebase';

type Events = {
  events: []
}

// Events取得成功
export function getEventsSuccess(events: Events) {
  return {
    type: GET_USER_SUCCESS,
    events,
  };
}

// Events取得
export function getEvents() {
  return (dispatch: any) => axios
    .get('http://localhost:3000/events')
    .then((events) => {
      dispatch(getEventsSuccess(events.data));
    })
    .catch((err) => {
      throw err;
    });
}

export function getEventsFromFirebaseSuccess(events: Events) {
  return {
    type: GET_EVENTS_FROM_FIREBASE_SUCCESS,
    events,
  };
}

export function getFirebaseData() {
  return async (dispatch: any) => {
    const firebaseData = ((await firebase.database().ref('data').once('value')).val());
    dispatch(getEventsFromFirebaseSuccess(firebaseData));
  };
}

