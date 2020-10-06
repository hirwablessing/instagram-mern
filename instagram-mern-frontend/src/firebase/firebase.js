import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6E6gHN8r9M3nwZtx0ZcREYXnp65_vDII",
  authDomain: "hirwab-instagram-clone.firebaseapp.com",
  databaseURL: "https://hirwab-instagram-clone.firebaseio.com",
  projectId: "hirwab-instagram-clone",
  storageBucket: "hirwab-instagram-clone.appspot.com",
  messagingSenderId: "1043282301586",
  appId: "1:1043282301586:web:1f2c3a6a30741954700c4b",
  measurementId: "G-DY141XS1JL",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()

export {db, auth, storage};