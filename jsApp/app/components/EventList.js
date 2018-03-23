/* @flow */
import React, { Component } from 'react';
import { List } from 'native-base';
import EventItem from './EventItem';
import {getFirebaseData} from '../actions/EventAction.js';
import Event from '../type/Event';

type Props = {
  dispatch?: {},
  isFetching: boolean,
  events: Array<Event>
};

export default class EventList extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  getNowDate(): string {
    date = new Date();
    dateString = `${date.getFullYear()}-${('00' + (date.getMonth() + 1)).slice(-2)}-${('00' + date.getDate()).slice(-2)}`;
    return dateString;
  }

  render(): {} {
    return (
      <List
        dataArray={this.props.events.filter((n: Event): Event => n.date >= this.getNowDate())}
        renderRow={(item: Event): Event =>
          <EventItem item={item} />
        }
        style={{backgroundColor: 'white'}}
      />
    );
  }
}
