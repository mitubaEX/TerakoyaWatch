// 必要なリソース追加する
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  FlatList,
  Text
} from 'react-native';

import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'

import { Container, Header, Content, List, ListItem, Body, Title, Separator } from 'native-base';

import EventList from './EventList'
import MyCalendar from './Calendar'

class MainContainer extends Component {
  render() {
    // この部分はビューをレンダーです。
    return (
      <Container>
        <Header >
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
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

// このContainerを利用できるためエクスポートします
export default MainContainer;
