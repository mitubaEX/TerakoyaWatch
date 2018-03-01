import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Body, Title, Button, Icon, Right, Left, Separator } from 'native-base';
import EventItem from './EventItem';

export default class EventList extends Component {
  render() {
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <List dataArray={items}
        renderRow={(item) =>
            <EventItem item={item}>
            </EventItem>
        }
      >
      </List>
    );
  }
}
