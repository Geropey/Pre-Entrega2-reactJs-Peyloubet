// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzET5dB1E9aVN3Yoq1JMlu95nYOOIiGNY",
  authDomain: "coderhouse-57985-80535.firebaseapp.com",
  projectId: "coderhouse-57985-80535",
  storageBucket: "coderhouse-57985-80535.appspot.com",
  messagingSenderId: "925860240455",
  appId: "1:925860240455:web:a2bca35bdd1cd9cd82a562",
  measurementId: "G-0S0DT1RYX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)