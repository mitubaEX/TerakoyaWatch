import React, { Component } from 'react';
import { List } from 'native-base';
import EventItem from './EventItem';

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <List
        dataArray={this.props.events}
        renderRow={item =>
          <EventItem item={item} />
        }
      />
    );
  }
}
