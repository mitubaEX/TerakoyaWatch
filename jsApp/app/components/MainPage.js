import React, { Component } from 'react';

import { Container, Header, Content, List, ListItem, Body, Title, Separator, Text } from 'native-base';

import EventList from './EventList'
import MyCalendar from './Calendar'

export default class MainPage extends Component {
  render(){
    return (
      <Container>
        <Content>
          <Separator bordered>
            <Text>New Event</Text>
          </Separator>
          <EventList />
          <Separator bordered>
            <Text>Calendar</Text>
          </Separator>
          <MyCalendar />
        </Content>
      </Container>
    );
  }
}
