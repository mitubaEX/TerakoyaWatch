import React, { Component } from 'react';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    console.log(this.props.data)
    return (
      <ul>{this.props.data.map((n) => <li key={n.id}>{n.date + ',' + n.title}</li>)}</ul>
    );
  }
}

export default EventList;
