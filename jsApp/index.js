/* @flow */
// import { AppRegistry } from 'react-native';
// import App from './app/containers/Main';
//
// AppRegistry.registerComponent('jsApp', () => App);

import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from './app/store'

// MainContainerを利用するため
import Main from './app/components/Main'

/**
 * Provideを使ってreduxとreact連携する
 */
const App = (): void => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

AppRegistry.registerComponent('jsApp', (): void => App);
