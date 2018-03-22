/* @flow */
import React, { Component } from 'react';

import {
  Scene,
  Router,
} from 'react-native-router-flux';

import MainPageContainer from './MainPage';
import EventPage from './EventPage';

class Main extends Component<{}, {}> {
  render(): React.Node {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#58D3F7' }} titleStyle={{color : "#fff"}}>
        <Scene key="root">
          <Scene key="MainPage" backTitle=" " headerTintColor="#fff" initial component={MainPageContainer} title="TeraWatch" />
          <Scene key="EventPage" backTitle=" " headerTintColor="#fff" component={EventPage} />
        </Scene>
      </Router>
    );
  }
}

export default Main;
