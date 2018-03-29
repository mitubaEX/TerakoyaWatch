/* @flow */
import React, { Component } from 'react';
import { List, Content, Text, Separator } from 'native-base';
import EventItem from './EventItem';
import {getFirebaseData} from '../actions/EventAction.js';
import Event from '../type/Event';

type Props = {
  dispatch?: {},
  isFetching: boolean,
  events: Array<Event>,
  eachMonthEvents: {}
};

export default class EventList extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render(): {} {
    return (
      <Content>
        {Object.keys(this.props.eachMonthEvents).map((n: string, index: number): {} =>
          <Content key={index}>
            <Separator bordered>
              <Text>{n.replace(/-/g, "/")}</Text>
            </Separator>
          {this.props.eachMonthEvents[n].map((m: Event, index: number): {} =>
            <EventItem key={index} item={m} style={{backgroundColor: 'white'}}/>
          )}
        </Content>
        )}
      </Content>
    );
  }
}
