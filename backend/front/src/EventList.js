import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getMapList() {
    if (this.props.data !== null) {
      return (this.props.data.map(n => <li key={n.id}>{`${n.date},${n.title}`}<div><ReactMarkdown source={n.body} /></div></li>));
    }
    return (<li />);
  }

  render() {
    console.log(this.props.data);
    return (
      <ul>{
        this.getMapList()
      }
      </ul>
    );
  }
}

export default EventList;
