/* @flow */
import React, { Component } from 'react';
import { Card, CardItem, Container, Content, Text, Body, Left, Right, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Markdown from 'react-native-simple-markdown'
import Event from '../type/Event'

type Props = {
  item: Array<Event>
};

export default class EventPage extends Component<Props, {}> {
  render(): {} {
    return (
      <Container>
        <Content>
          {this.props.item.map((n: Event): Event =>
            <Card key={n.id} style={{flex: 0}}>
              <CardItem header>
                <Body>
                  <Text note>{n.date}</Text>
                  <Text style={{ fontWeight: 'bold' }}>{n.title}</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    {n.body}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
              </CardItem>
            </Card>
          )}
        </Content>
      </Container>
    );
  }
}
