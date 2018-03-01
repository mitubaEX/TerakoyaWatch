// 必要なリソース追加する
import React, { Component } from 'react';

import MainPage from './MainPage'
import EventPage from './EventPage'

import {
  StackNavigator,
} from 'react-navigation';


class Main extends Component {
  render() {
    return (
      <MainPage />
    );
  }
}

// このContainerを利用できるためエクスポートします
export default Main;
