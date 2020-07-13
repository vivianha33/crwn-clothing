
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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    //returns if we're signing out, this only runs when we sign in
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    //checks if data already exsists
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      //creates snapshot/data
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;