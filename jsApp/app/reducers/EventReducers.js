/* @flow */
import { GET_EVENTS_FROM_FIREBASE_SUCCESS, IS_FETCHING, type Action } from '../actions/EventTypes';

type State = {
  isFetching: boolean,
  events: [],
}

const events = (state: State = { isFetching: true, events: [] }, action: Action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        isFetching: true,
        events: state.events
      }
    case GET_EVENTS_FROM_FIREBASE_SUCCESS:
      return {
        isFetching: false,
        events: action.events,
      };
    default:
      return state;
  }
};

export default events;
