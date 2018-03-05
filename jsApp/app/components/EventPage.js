/* @flow */
import React, { Component } from 'react';
import { Card, CardItem, Container, Content, Text, Body } from 'native-base';

type Props = {
  item: {
    date: string,
    title: string,
    body: string,
  }
}

export default class EventPage extends Component<Props, {}> {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>{this.props.item.title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {this.props.item.body}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
