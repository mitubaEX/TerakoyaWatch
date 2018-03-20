// 必要なリソース追加する
import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import {
    Actions,
} from 'react-native-router-flux';

type Props = {
  events: [],
}

export default class MyCalendar extends Component<Props, {}> {
  constructor(props: Props) {
    super(props)
    this.props = props
  }

  getTitle(dateString: string){
    filterArray = this.props.events.filter((n) => n.date == dateString);
    if(filterArray.length === 0){
      return null;
    }
    return filterArray[0].title
  }

  getBody(dateString: string){
    return this.props.events.filter((n) => n.date == dateString)[0].body
  }

  render() {
    console.log(this.props)
    const dateList = {};
    this.props.events.forEach((n) => dateList[n.date] = {marked: true});
    return (
      <Calendar
        onDayPress={(day) => {
          if(this.getTitle(day.dateString) !== null){
            Actions.EventPage({item: this.props.events.filter((n) => n.date === day.dateString)})
          }
        }}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {console.log('month changed', month)}}
        hideExtraDays={true}
        hideArrows={false}
        firstDay={1}
        showWeekNumbers={false}
        markedDates={dateList}
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
