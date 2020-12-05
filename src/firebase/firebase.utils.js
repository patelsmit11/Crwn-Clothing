import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxdzNLr_ukB4ALUdVBZpne3sUyhyB6QuU",
    authDomain: "crwn-db-f42e0.firebaseapp.com",
    projectId: "crwn-db-f42e0",
    storageBucket: "crwn-db-f42e0.appspot.com",
    messagingSenderId: "424639317176",
    appId: "1:424639317176:web:9c034fc791a38d42ef204d",
    measurementId: "G-XRNQE7KYNL"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;