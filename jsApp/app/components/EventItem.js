import React, { Component } from 'react';
import { ListItem, Text, Body, Button, Icon, Right, Left } from 'native-base';
import {
    Actions,
} from 'react-native-router-flux';

import EventPage from './EventPage';

export default class EventItem extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <ListItem icon>
        <Left>
          <Text>{this.props.item.date}</Text>
        </Left>
        <Body>
          <Text>{this.props.item.title}</Text>
        </Body>
        <Right>
          <Button transparent onPress={() => Actions.EventPage({item: this.props.item})}>
            <Icon name="arrow-forward" />
          </Button>
        </Right>
      </ListItem>
    );
  }
}
