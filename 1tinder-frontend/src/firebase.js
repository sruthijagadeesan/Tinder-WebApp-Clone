import firebase from "firebase";
//import firestore from "firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBE2M_GfqnuQY7cidEfmnaTbW9S1rATzYk",
    authDomain: "tinder-clone-32963.firebaseapp.com",
    databaseURL: "https://tinder-clone-32963-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tinder-clone-32963",
    storageBucket: "tinder-clone-32963.appspot.com",
    messagingSenderId: "610361367372",
    appId: "1:610361367372:web:740ab0692dbe5f58908de9"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;