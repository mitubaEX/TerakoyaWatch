/* @flow */
import axios from 'axios';

import {
  GET_EVENTS_FROM_FIREBASE_SUCCESS,
} from './EventTypes';

import firebase from '../firebase/firebase';

export function getEventsFromFirebaseSuccess(events: {events: []}) {
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

