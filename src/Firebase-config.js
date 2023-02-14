import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // apiKey: "process.env.FREIGHTLIK_APP_FIREBASE_KEY",
    apiKey: 'AIzaSyAx3Eb1v9mYthjvgSW_ePBRB0Cfxbmc4F4',
    authDomain: "freightlik.firebaseapp.com",
    projectId: "freightlik",
    storageBucket: "freightlik.appspot.com",
    messagingSenderId: "209102877114",
    appId: "1:209102877114:web:c45c0f71ae777c9e7e6d83",
    measurementId: "G-7YQ5Q4C3B6"
  };

  const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app);
  export const db = getFirestore(app);