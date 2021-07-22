import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAA_-l1cQO8KE7XvW4qGebDrw7WH4obJiM",
  authDomain: "dialoga-cms-dev.firebaseapp.com",
  projectId: "dialoga-cms-dev",
  storageBucket: "dialoga-cms-dev.appspot.com",
  messagingSenderId: "627725690655",
  appId: "1:627725690655:web:db4bb1e4f536858a73f22a"
  /*
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
  */
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);  
  console.log('Firebase was successfully init.');
} else {
  firebase.app();
}

export default firebase;