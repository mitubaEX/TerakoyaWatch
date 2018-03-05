import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Content, List, ListItem, Body, Title, Separator, Text } from 'native-base';

import MyCalendar from './Calendar'
import {getFirebaseData} from '../actions/EventAction'
import EventList from './EventList'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getFirebaseData())
  }

  render(){
    return (
      <Container>
        <Content>
          <EventList events={this.props.events}/>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return  { events: state.events };
}

const MainPageContainer = connect(mapStateToProps)(MainPage)

export default MainPageContainer
