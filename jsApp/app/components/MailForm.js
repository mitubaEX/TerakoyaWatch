/* @flow */
import React, { Component } from 'react';
import { Item, Input, Button, Text, Content } from 'native-base';

type State = {
  text: string
};

export default class MailForm extends Component<{}, State> {
  constructor() {
    super()
    this.state = {text: ''}
  }
  onChangeText(text: string) {
    console.log(text)
    this.setState({text: text})
  }

  sendMessage (text: string) {
    console.log(text)
  }



  render(): {} {
    return (
      <Content>
        <Item style={{marginTop: 10, marginBottom: 10, borderColor: 'white'}}>
          <Input
            placeholder="要望・問い合わせ何でもどうぞ！！"
            onChangeText={(text: string): string => this.onChangeText(text)}
            value={this.state.text}
            multiline={true}
            numberOfLines={5}
            style={{height: 150}}
          />
        </Item>
      <Button onPress={(): void => this.sendMessage(this.state.text)} block success>
        <Text>投稿</Text>
      </Button>
    </Content>
    );
  }
}
