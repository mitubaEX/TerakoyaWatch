/* @flow */
import { GET_EVENTS_FROM_FIREBASE_SUCCESS, IS_FETCHING, type Action } from '../actions/EventTypes';
import Event from '../type/Event';

type State = {
  isFetching: boolean,
  events: Array<Event>,
  eachMonthEvents: {}
};

function getNowDate(): string {
  date = new Date();
  dateString = `${date.getFullYear()}-${('00' + (date.getMonth() + 1)).slice(-2)}-${('00' + date.getDate()).slice(-2)}`;
  return dateString;
}

function getEachMonthEvents(events: Array<Event>): {} {
  var eachMonthEvents = {}
  events
    .filter((n: Event): Event => n.date >= getNowDate())
    .sort(function(a: Event, b: Event): number{
      if ( a.date < b.date ) return -1;
      if ( a.date > b.date ) return 1;
      return 0;
    })
    .forEach((n: Event): Event => {
      if (eachMonthEvents[n.date.substring(0, 7)]) {
        eachMonthEvents[n.date.substring(0, 7)].push(n)
      } else {
        eachMonthEvents[n.date.substring(0, 7)] = [n]
      }
    })
  if (eachMonthEvents)
    return eachMonthEvents
  else
    return {}
}

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
        eachMonthEvents: getEachMonthEvents(action.events)
      };
    default:
      return state;
  }
};

export default events;
