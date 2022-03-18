import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDceV40HN5i5gF_VKohu-gzEl18NUan8zw",
  authDomain: "letmeask-fdd44.firebaseapp.com",
  databaseURL: "https://letmeask-fdd44-default-rtdb.firebaseio.com",
  projectId: "letmeask-fdd44",
  storageBucket: "letmeask-fdd44.appspot.com",
  messagingSenderId: "524676943631",
  appId: "1:524676943631:web:4d79ff99a39084a409f87a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }