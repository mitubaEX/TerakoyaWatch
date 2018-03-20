/* @flow */
import React, { Component } from 'react';
import { Card, CardItem, Container, Content, Text, Body, Left, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Markdown from 'react-native-simple-markdown'

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
              <Left>
                <Text>{this.props.item.date}</Text>
              </Left>
              <Body>
                <Text>{this.props.item.title}</Text>
              </Body>
              <Right />
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
