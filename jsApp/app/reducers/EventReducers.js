/* @flow */
import { GET_EVENTS_FROM_FIREBASE_SUCCESS, IS_FETCHING, type Action } from '../actions/EventTypes';
import Event from '../type/Event';

type State = {
  isFetching: boolean,
  events: Array<Event>
};

const events = (state: State = { isFetching: true, events: [] }, action: Action): State => {
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
