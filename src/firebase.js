import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyABBBo6YIIXkmxlUse3FRuN4oeWKPquKsc',
  authDomain: 'agits-icalt.firebaseapp.com',
  databaseURL: 'https://agits-icalt.firebaseio.com',
  projectId: 'agits-icalt',
  storageBucket: 'agits-icalt.appspot.com',
  messagingSenderId: '930640263121',
};
firebase.initializeApp(config);
