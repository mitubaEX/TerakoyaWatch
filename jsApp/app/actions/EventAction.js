/* @flow */
import axios from 'axios';

import {
  GET_EVENTS_FROM_FIREBASE_SUCCESS,
  IS_FETCHING,
  Action
} from './EventTypes';

import firebase from '../firebase/firebase';

export function getEventsFromFirebaseSuccess(events: {events: []}): Action {
  return {
    type: GET_EVENTS_FROM_FIREBASE_SUCCESS,
    events,
  };
}

export function getFirebaseData(): void {
  return async (dispatch: {}): void => {
    dispatch(isFetching);
    const firebaseData = ((await firebase.database().ref('data').child('events').once('value')).val());
    dispatch(getEventsFromFirebaseSuccess(firebaseData));
  };
}

export function isFetching(): Action {
  return {
    type: IS_FETCHING,
  }
}

