import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvV8VbhTWi7BB0a2fcpSFvIpsKrzYZQdU",
    authDomain: "ninja-firegram-cd4dc.firebaseapp.com",
    databaseURL: "https://ninja-firegram-cd4dc.firebaseio.com",
    projectId: "ninja-firegram-cd4dc",
    storageBucket: "ninja-firegram-cd4dc.appspot.com",
    messagingSenderId: "1063258407820",
    appId: "1:1063258407820:web:08bf407abc4078de494ca9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectfirestore = firebase.firestore();

  export { projectStorage, projectfirestore };