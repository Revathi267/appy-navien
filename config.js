import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD052mFx6LgfokYDaxn_QynxReqoNOnN04",
    authDomain: "navien-garments.firebaseapp.com",
    projectId: "navien-garments",
    storageBucket: "navien-garments.appspot.com",
    messagingSenderId: "471973292355",
    appId: "1:471973292355:web:08ba4aa1cdf4538ffea7f6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();