/* @flow */
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBv8T2IvJueP03nxLYjez9SIiAl4fe1LV0",
  authDomain: "terakoyawatch.firebaseapp.com",
  databaseURL: "https://terakoyawatch.firebaseio.com",
  projectId: "terakoyawatch",
  storageBucket: "terakoyawatch.appspot.com",
  messagingSenderId: "495210227972"
};

firebase.initializeApp(config);

export default firebase
