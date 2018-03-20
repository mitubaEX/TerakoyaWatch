import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {firebaseDb} from './firebase/';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class MyDatePicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      body: '',
      startDate: moment(),
      dateString: moment().format('YYYY-MM-DD'),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      dateString: date.format('YYYY-MM-DD'),
    });
  }

  handleFormChange(event) {
    this.setState({value: event.target.value});
  }

  handleBodyChange(event) {
    this.setState({body: event.target.value});
  }

  handleSubmit(event) {
    const sendData = {title: this.state.value, body: this.state.body, date: this.state.dateString, id: this.props.data.length + 1}
    if(this.props.data !== null){
      firebaseDb.ref('data').set(this.props.data.concat([sendData]))
    } else {
      firebaseDb.ref('data').set([sendData])
    }
    alert('A name was submitted: ' + this.state.value + this.state.body + this.state.dateString);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleFormChange} />
            </label>
          </div>
          <div>
            <label>
              Body:
              <textarea value={this.state.body} onChange={this.handleBodyChange} rows="15"/>
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
