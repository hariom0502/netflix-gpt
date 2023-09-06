// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaG5p6xDCOARVnDZjn_AWtALR7iGee6XU",
  authDomain: "hash-e2052.firebaseapp.com",
  projectId: "hash-e2052",
  storageBucket: "hash-e2052.appspot.com",
  messagingSenderId: "756969719098",
  appId: "1:756969719098:web:5dcfecffd38de238be7c03",
  measurementId: "G-7TFKELV8YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();