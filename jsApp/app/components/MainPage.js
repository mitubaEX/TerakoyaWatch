/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RefreshControl } from 'react-native';
import { Container, Content, Spinner, Separator, Text, Tabs, Tab, TabHeading, Icon } from 'native-base';

import { getFirebaseData } from '../actions/EventAction';
import EventList from './EventList';
import MyCalendar from './Calendar';
import Event from '../type/Event';
import MailForm from './MailForm';
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
          <Tabs tabBarUnderlineStyle={{backgroundColor:'#58D3F7'}} onChangeTab={(): void => console.log('hello')}>
            <Tab heading={<TabHeading style={{backgroundColor: 'white'}}><Icon name="list-box" style={{color: '#585858'}}/></TabHeading>}>
              <Content
                refreshControl={<RefreshControl
                    refreshing={this.props.isFetching}
                    onRefresh={this.refreshList.bind(this)}
                />}>
                <EventList events={this.props.events} isFetching={this.props.isFetching}/>
              </Content>
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor: 'white'}}><Icon name="calendar" style={{color: '#585858'}}/></TabHeading>}>
              <Content>
                <MyCalendar events={this.props.events} />
              </Content>
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor: 'white'}}><Icon name="mail"  style={{color: '#585858'}}/></TabHeading>}>
              <MailForm />
            </Tab>
          </Tabs>
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
