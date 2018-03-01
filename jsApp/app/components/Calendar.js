// 必要なリソース追加する
import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars'

export default class MyCalendar extends Component {
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  }
});
