/* @flow */
import React, { Component } from 'react';
import { ListItem, Text, Body, Button, Icon, Right, Left } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Event from '../type/Event';

type Props = {
  item: Event
};

export default class EventItem extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render(): {} {
    return (
      <ListItem icon>
        <Left>
          <Text>{this.props.item.date}</Text>
        </Left>
        <Body>
          <Text>{this.props.item.title}</Text>
        </Body>
        <Right>
          <Button transparent onPress={(): void => Actions.EventPage({ title: `${this.props.item.date} のイベント`, item: [this.props.item] })}>
            <Icon name="arrow-forward" />
          </Button>
        </Right>
      </ListItem>
    );
  }
}
