import firebase from 'firebase/app';
//import 'firebase/firestore';
import 'firebase/auth';
//import 'firebase/firebase-analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA8buaiwN0HPDhkHIqXAKrzwMz6Zo0Easo",
  authDomain: "mercadito-ddfb3.firebaseapp.com",
  databaseURL: "https://mercadito-ddfb3.firebaseio.com",
  projectId: "mercadito-ddfb3",
  storageBucket: "mercadito-ddfb3.appspot.com",
  messagingSenderId: "507056990569",
  appId: "1:507056990569:web:834c865d378ac48c15b5f8",
  measurementId: "G-52H3CWQJ6X"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);


//firebase.analytics();
//const firestore = fb.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { fb, googleProvider };