/* @flow */
import { connect } from 'react-redux';
import EventList from '../components/EventList';
import {State} from '../reducers/EventReducers';
import Event from '../type/Event';

function mapStateToProps(state: State): Array<Event> {
  return { events: state.events };
}

const EventListContainer = connect(mapStateToProps)(EventList);

export default EventListContainer;
