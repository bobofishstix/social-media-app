import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwxPU9owgTmnJuXDT0pp5-Db3ASojDZTY",
    authDomain: "socialmediaportfolio-c5292.firebaseapp.com",
    projectId: "socialmediaportfolio-c5292",
    storageBucket: "socialmediaportfolio-c5292.appspot.com",
    messagingSenderId: "344701134114",
    appId: "1:344701134114:web:0d37641251457aec1fb17b",
    measurementId: "G-01RZY1Y8XJ"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);

  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider, storage};