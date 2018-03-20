/* @flow */
import React, { Component } from 'react';
import { List } from 'native-base';
import EventItem from './EventItem';
import {getFirebaseData} from '../actions/EventAction.js';

type Props = {
  dispatch?: any,
  isFetching: boolean,
  events: [],
}

export default class EventList extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  getNowDate() {
    date = new Date();
    dateString = date.getFullYear() + '-' + ('00' + (date.getMonth() + 1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2);
    return dateString;
  }

  render() {
    return (
      <List
        dataArray={this.props.events.filter((n) => n.date >= this.getNowDate()).slice(0, 4)}
        renderRow={item =>
          <EventItem item={item} />
        }
      />
    );
  }
}
