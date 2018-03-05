/* @flow */
import { GET_USER_SUCCESS, GET_EVENTS_FROM_FIREBASE_SUCCESS } from '../actions/EventTypes';

type State = {
  isFetching: boolean,
  events: [],
}

const events = (state: State = { isFetching: false, events: [] }, action: any) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return action.events;
    case GET_EVENTS_FROM_FIREBASE_SUCCESS:
      return {
        isFetching: true,
        events: action.events,
      };
    default:
      return state;
  }
};

export default events;
