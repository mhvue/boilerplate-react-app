import * as firebase from "firebase";

// const firebaseConfig = {
//     apiKey:process.env.FIREBASE_API_KEY,
//     authDomain:process.env.FIREBASE_AUTH_DOMTAIN,
//     databaseURL:process.env.FIREBASE_DATABASE_URL,
//     projectId:process.env.FIREBASE_PROJECT_ID,
//     storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId:process.env.FIREBASE_APP_ID,
//     measurementId:process.env.FIREBASE_MEASUREMENT_ID
//   };

var firebaseConfig = {
  apiKey: "AIzaSyArwWpJaLyIJ-b2F9twvyAYiCNGFyjRjrQ",
  authDomain: "expensify-test-4bb30.firebaseapp.com",
  databaseURL: "https://expensify-test-4bb30-default-rtdb.firebaseio.com",
  projectId: "expensify-test-4bb30",
  storageBucket: "expensify-test-4bb30.appspot.com",
  messagingSenderId: "1002560816901",
  appId: "1:1002560816901:web:245e74c3653d76249c596c",
  measurementId: "G-PQL1QTERCC"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ 'prompt': 'select_account' });


 export { firebase, googleAuthProvider, database as default };


