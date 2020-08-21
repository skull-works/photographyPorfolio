import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB4UK2BvQtut_1QahOmnxMdTgcxsmCRz0s",
    authDomain: "my-website-5215f.firebaseapp.com",
    databaseURL: "https://my-website-5215f.firebaseio.com",
    projectId: "my-website-5215f",
    storageBucket: "my-website-5215f.appspot.com",
    messagingSenderId: "991559149656",
    appId: "1:991559149656:web:fac4b85c1d963adcaa422d",
    measurementId: "G-W23NGVPSKZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage().ref();

  export {
      storage, 
      firebase as default
  }