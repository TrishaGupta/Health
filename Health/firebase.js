// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from 'firebase/database'
import firebase from 'firebase/compat/database';


//import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmm65vMHbCheZySmaL-igp60YI6Gl_Br8",
  authDomain: "health-c02ad.firebaseapp.com",
  databaseURL: "https://health-c02ad-default-rtdb.firebaseio.com",
  projectId: "health-c02ad",
  storageBucket: "health-c02ad.appspot.com",
  messagingSenderId: "155926719874",
  appId: "1:155926719874:web:ed73d5b92f7a8925a0339b",
  measurementId: "G-ZL8SLKEBJX"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const database = getDatabase();


  
export default database;