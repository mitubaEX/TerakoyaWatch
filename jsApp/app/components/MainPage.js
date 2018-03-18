/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RefreshControl } from 'react-native';
import { Container, Content, Spinner, Separator, Text } from 'native-base';

import { getFirebaseData } from '../actions/EventAction';
import EventList from './EventList';
import MyCalendar from './Calendar';

type Props = {
  dispatch: any,
  isFetching: boolean,
  events: [],
}

class MainPage extends Component<Props, {}> {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getFirebaseData());
  }

  refreshList () {
    const {dispatch} = this.props
    dispatch(getFirebaseData());
  }

  render() {
    return (
      <Container>
        {(() => (!this.props.isFetching ?
          <Content
            refreshControl={<RefreshControl
                refreshing={this.props.isFetching}
                onRefresh={this.refreshList.bind(this)}
            />}>
            <Separator bordered>
              <Text>New Event</Text>
            </Separator>
            <EventList events={this.props.events} isFetching={this.props.isFetching}/>
            <Separator bordered>
              <Text>Event Calendar</Text>
            </Separator>
            <MyCalendar events={this.props.events} />
          </Content>
          : <Spinner color="blue" />))()}
        </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.events.isFetching,
    events: state.events.events,
  };
}

const MainPageContainer = connect(mapStateToProps)(MainPage);

export default MainPageContainer;
