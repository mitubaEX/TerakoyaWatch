// 必要なリソース追加する
import React, { Component } from 'react';

import MainPage from './MainPage'
import EventPage from './EventPage'

import {
  StackNavigator,
} from 'react-navigation';

import {
    Scene,
    Router,
} from 'react-native-router-flux';


class Main extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='MainPage' initial component={MainPage} title='Top'/>
          <Scene key='EventPage' component={EventPage} title='Event'/>
        </Scene>
      </Router>
    );
  }
}

// このContainerを利用できるためエクスポートします
export default Main;
