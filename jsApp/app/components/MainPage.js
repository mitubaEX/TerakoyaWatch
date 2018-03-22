/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RefreshControl } from 'react-native';
import { Container, Content, Spinner, Separator, Text } from 'native-base';

import { getFirebaseData } from '../actions/EventAction';
import EventList from './EventList';
import MyCalendar from './Calendar';
import Event from '../type/Event';
import {State} from '../reducers/EventReducers';

type Props = {
  dispatch: {},
  isFetching: boolean,
  events: Array<Event>
};

class MainPage extends Component<Props, {}> {
  constructor(props: Props) {
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

  render(): {} {
    return (
      <Container>
        {((): void => (!this.props.isFetching ?
          <Content
            refreshControl={<RefreshControl
                refreshing={this.props.isFetching}
                onRefresh={this.refreshList.bind(this)}
            />}>
            <Separator bordered style={{backgroundColor: '#F2F2F2'}}>
              <Text>近日開催イベント</Text>
            </Separator>
            <EventList events={this.props.events} isFetching={this.props.isFetching}/>
            <Separator bordered style={{backgroundColor: '#F2F2F2'}}>
              <Text>カレンダー</Text>
            </Separator>
            <MyCalendar events={this.props.events} />
          </Content>
          : <Spinner color="blue" size="large" style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}/>))()}
        </Container>
    );
  }
}

function mapStateToProps(state: State): State {
  return {
    isFetching: state.events.isFetching,
    events: state.events.events,
  };
}

const MainPageContainer = connect(mapStateToProps)(MainPage);

export default MainPageContainer;
