import firebase from 'firebase/app';
//import 'firebase/firestore';
import 'firebase/auth';
//import 'firebase/firebase-analytics';
import { firebaseConfig } from './firebaseConfig';
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);


//firebase.analytics();
//const firestore = fb.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { fb, googleProvider };