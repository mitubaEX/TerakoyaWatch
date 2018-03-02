import React, { Component } from 'react';
import { Card, CardItem, Container, Header, Content, Button, Text, Left, Right, Body } from 'native-base';

export default class EventPage extends Component {
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
