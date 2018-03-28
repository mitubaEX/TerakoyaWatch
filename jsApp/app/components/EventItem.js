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
          <Icon name="brush" />
        </Left>
        <Body>
          <Text>{this.props.item.title}</Text>
        <Text note>{this.props.item.date.replace(/-/g, "/")}</Text>
        </Body>
        <Right>
          <Button transparent onPress={(): void => Actions.EventPage({ title: `${this.props.item.date.replace(/-/g, "/")} のイベント`, item: [this.props.item] })}>
            <Icon name="arrow-forward" />
          </Button>
        </Right>
      </ListItem>
    );
  }
}
