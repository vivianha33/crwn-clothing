
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB8FLRmayHm0euNwNUUROSRwYLjQUeLBEw",
    authDomain: "crwn-db-ef141.firebaseapp.com",
    databaseURL: "https://crwn-db-ef141.firebaseio.com",
    projectId: "crwn-db-ef141",
    storageBucket: "crwn-db-ef141.appspot.com",
    messagingSenderId: "272855691449",
    appId: "1:272855691449:web:bb300871787523a340eb68",
    measurementId: "G-VJQVVELKWD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;