import React, { Component } from 'react';
import { ListItem, Text, Body, Button, Icon, Right, Left } from 'native-base';

import EventPage from './EventPage';

export default class EventItem extends Component {
  render() {
    return (
      <ListItem icon>
        <Left>
          <Text>2/28</Text>
        </Left>
        <Body>
          <Text>{this.props.item}</Text>
        </Body>
        <Right>
          <Button transparent onPress={() => console.log('hello')}>
            <Icon name="arrow-forward" />
          </Button>
        </Right>
      </ListItem>
    );
  }
}
