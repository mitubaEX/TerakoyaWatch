/* @flow */
import React, { Component } from 'react';
import { List } from 'native-base';
import EventItem from './EventItem';

type Props = {
  events: []
}

export default class EventList extends Component<Props, {}> {
  constructor(props: Props) {
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
