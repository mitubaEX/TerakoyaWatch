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
        <Calendar
          onDayPress={(day) => {console.log('selected day', day)}}
          monthFormat={'yyyy MM'}
          onMonthChange={(month) => {console.log('month changed', month)}}
          hideExtraDays={true}
          hideArrows={false}
          firstDay={1}
          showWeekNumbers={false}
          style={styles.calendar}
        />
      </View>
    );
  }
}

// ビューのスタイル修正
const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
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
