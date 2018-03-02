import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Body, Title, Button, Icon, Right, Left, Separator } from 'native-base';
import { getEvents } from '../actions/EventAction'
import EventItem from './EventItem';

export default class EventList extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  // componentDidMount() {
  //   console.log(this.props)
  //   const { dispatch } = this.props
  //   dispatch(getEvents())
  // }

  render() {
    // var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    console.log(this.props)
    return (
      <List dataArray={this.props.events}
        renderRow={(item) =>
            <EventItem item={item}/>
        }
      >
      </List>
    );
  }
}
