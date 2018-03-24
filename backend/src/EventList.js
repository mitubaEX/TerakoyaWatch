import React, { Component } from 'react';
import { firebaseDb } from './firebase/';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  deleteData(id) {
    const myRet = window.confirm('本当に削除しますか？');
    if (myRet === true) {
      firebaseDb.ref('data').set(this.props.data.filter(n => n.id !== id));
      this.props.getFirebaseData();
    } else {
    }
  }

  getMapList() {
    if (this.props.data !== null) {
      return (this.props.data.map(n => <li key={n.id}>{`${n.date},${n.title}`}<button type="button" onClick={() => this.deleteData(n.id)}>delete</button></li>));
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
