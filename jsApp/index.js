// @flow
import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from './app/store'
import { Root } from "native-base";

// MainContainerを利用するため
import Main from './app/components/Main'

/**
 * Provideを使ってreduxとreact連携する
 */
const App = (): React.Node => {
  return (
    <Root>
      <Provider store={store}>
        <Main />
      </Provider>
    </Root>
  )
}

AppRegistry.registerComponent('jsApp', (): React.Node => App);
