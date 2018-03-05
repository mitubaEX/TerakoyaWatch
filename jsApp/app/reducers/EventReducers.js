/* @flow */
import { GET_EVENTS_FROM_FIREBASE_SUCCESS, type Action } from '../actions/EventTypes';

type State = {
  isFetching: boolean,
  events: [],
}

const events = (state: State = { isFetching: false, events: [] }, action: Action) => {
  switch (action.type) {
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
