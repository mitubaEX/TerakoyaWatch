import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Content, List, ListItem, Body, Title, Separator, Text } from 'native-base';

import EventListContainer from '../containers/EventListContainer'
import MyCalendar from './Calendar'
import {getEvents} from '../actions/EventAction'

export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  // componentDidMount() {
  //   const { dispatch } = this.props
  //   dispatch(getEvents())
  // }

  render(){
    return (
      <Container>
        <Content>
          <Separator bordered>
            <Text>New Event</Text>
          </Separator>
          <EventListContainer />
          <Separator bordered>
            <Text>Calendar</Text>
          </Separator>
          <MyCalendar />
        </Content>
      </Container>
    );
  }
}

// function mapStateToProps(state) {
//   return  { events: state.events };
// }
//
// const MainPageContainer = connect(mapStateToProps)(MainPage)
//
// export default MainPageContainer
