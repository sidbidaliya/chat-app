import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyApQYioRoijYxGRH3tbuyTlIfP5Iuvd9ow',
  authDomain: 'chat-web-app-a602a.firebaseapp.com',
  projectId: 'chat-web-app-a602a',
  storageBucket: 'chat-web-app-a602a.appspot.com',
  messagingSenderId: '606514146208',
  appId: '1:606514146208:web:7221cb34e1b156a3f912c5',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
