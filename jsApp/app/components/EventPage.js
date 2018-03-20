/* @flow */
import React, { Component } from 'react';
import { Card, CardItem, Container, Content, Text, Body, Left, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

type Props = {
  item: []
}

export default class EventPage extends Component<Props, {}> {
  render() {
    return (
      <Container>
        <Content>
          {this.props.item.map((n) =>
            <Card key={n.id}>
              <CardItem header>
                <Left>
                  <Text>{n.date}</Text>
                </Left>
                <Body>
                  <Text>{n.title}</Text>
                </Body>
                <Right />
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    {n.body}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          )}
        </Content>
      </Container>
    );
  }
}
