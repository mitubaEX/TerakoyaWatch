/* @flow */
export const GET_EVENTS = 'GET_EVENTS';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_EVENTS_FROM_FIREBASE_SUCCESS = 'GET_EVENTS_FROM_FIREBASE_SUCCESS';
export const IS_FETCHING = 'IS_FETCHING';

export type Action = GetEventsFromFirebaseSuccess | IsFetching;

type GetEventsFromFirebaseSuccess = {
  type: string,
  events: []
};

type IsFetching = {
  type: string
};
