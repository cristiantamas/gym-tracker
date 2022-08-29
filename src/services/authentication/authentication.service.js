import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAeKtgZlGPITEq9qmwVLiwWgGTlRSoGxbU',
  authDomain: 'gym-tracker-1a659.firebaseapp.com',
  projectId: 'gym-tracker-1a659',
  storageBucket: 'gym-tracker-1a659.appspot.com',
  messagingSenderId: '192016821586',
  appId: '1:192016821586:web:0af684f979520e09389e8b',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const registerRequest = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
