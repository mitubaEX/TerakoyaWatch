// 必要なリソース追加する
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform
} from 'react-native';

import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'

import {Calendar, CalendarList} from 'react-native-calendars'

class MainContainer extends Component {
  render() {
    // この部分はビューをレンダーです。
    return (
      <View style={styles.container}>
        <CalendarList
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          pastScrollRange={50}
          futureScrollRange={50}
          scrollEnabled={true}
          showScrollIndicator={true}
        />
      </View>
    );
  }
}

// ビューのスタイル修正
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#1D9FF2"
  }
});

// このContainerを利用できるためエクスポートします
export default MainContainer;
