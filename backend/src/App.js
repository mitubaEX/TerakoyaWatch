import React, { Component } from 'react';
import './App.css';
import { firebaseDb } from './firebase/';
import MyDatePicker from './DatePicker';
import EventList from './EventList';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = ({ data: [], questions: {} });
  }

  async getFirebaseData() {
    const value = ((await firebaseDb.ref('data').child('events').once('value')).val());
    const questions = ((await firebaseDb.ref('data').child('questions').once('value')).val());
    this.setState({ data: value, questions: questions });
  }

  componentDidMount() {
    this.getFirebaseData();
  }

  getMapList() {
    if (Object.keys(this.state.questions)) {
      return (Object.keys(this.state.questions).map(n => <li key={n}>{`${this.state.questions[n]['question']}`}</li>));
    }
    return (<li />);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TrakoyaWatch</h1>
        </header>
        <h2>EventList</h2>
        <EventList data={this.state.data} getFirebaseData={this.getFirebaseData.bind(this)} />
        <h2>Submission</h2>
        <MyDatePicker data={this.state.data} getFirebaseData={this.getFirebaseData.bind(this)} />
        <h2>Question</h2>
        <ul>{
          this.getMapList()
        }
      </ul>
      </div>
    );
  }
}

export default App;
