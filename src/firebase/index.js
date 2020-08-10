import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAR1DTLbwqOwFp4GMT845MSe7ME5lRp9Yk",
    authDomain: "albert-profolio.firebaseapp.com",
    databaseURL: "https://albert-profolio.firebaseio.com",
    projectId: "albert-profolio",
    storageBucket: "albert-profolio.appspot.com",
    messagingSenderId: "949920265382",
    appId: "1:949920265382:web:9435e23d717c14f0357067",
    measurementId: "G-FWR93H3ZWG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage().ref();

  export {
      storage, 
      firebase as default
  }