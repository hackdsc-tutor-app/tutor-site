import firebase from 'firebase/app'
// import 'firebase/storage';
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'
import 'firebase/database'
import 'firebase/analytics'
import 'firebase/functions';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAls7DKvkjGbN9rG9wWOQHQic_290fj68M",
    authDomain: "hackdsc-tutor-app-b6bbc.firebaseapp.com",
    databaseURL: "https://hackdsc-tutor-app-b6bbc.firebaseio.com",
    projectId: "hackdsc-tutor-app-b6bbc",
    storageBucket: "hackdsc-tutor-app-b6bbc.appspot.com",
    messagingSenderId: "106950418503",
    appId: "1:106950418503:web:fd45e048ec95af8efc5162",
    measurementId: "G-PCWMEM5V7K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase