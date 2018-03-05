/* @flow */
import { connect } from 'react-redux';
import EventList from '../components/EventList';

function mapStateToProps(state) {
  return { events: state.events };
}

const EventListContainer = connect(mapStateToProps)(EventList);

export default EventListContainer;
