/* @flow */
import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import {
    Actions,
} from 'react-native-router-flux';
import Event from '../type/Event';

type Props = {
  events: Array<Event>
};

export default class MyCalendar extends Component<Props, {}> {
  constructor(props: Props) {
    super(props)
    this.props = props
  }

  getTitle(dateString: string): string{
    filterArray = this.props.events.filter((event: Event): Event => event.date == dateString);
    if(filterArray.length === 0){
      return null;
    }
    return filterArray[0].title
  }

  getBody(dateString: string): string{
    return this.props.events.filter((event: Event): Event => event.date == dateString)[0].body
  }

  render(): {}{
    const dateList = {};
    this.props.events.forEach((n: Event): Event => dateList[n.date] = {selected: true, color: 'blue'});
    return (
      <CalendarList
        pastScrollRange={0}
        futureScrollRange={12}
        scrollEnabled={true}
        showScrollIndicator={true}
        onDayPress={(day: {}) => {
          if(this.getTitle(day.dateString) !== null){
            Actions.EventPage({title: day.dateString + 'のイベント', item: this.props.events.filter((n: Event): Event => n.date === day.dateString)})
          }
        }}
        monthFormat={'yyyy MM'}
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
    borderColor: '#eee'
  }
});
