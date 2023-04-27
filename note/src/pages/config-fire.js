// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB5PxJXQZH0CWZC31dVhaGaswy_xU5PyeI",
  authDomain: "project-note-b7540.firebaseapp.com",
  projectId: "project-note-b7540",
  storageBucket: "project-note-b7540.appspot.com",
  messagingSenderId: "403665913628",
  appId: "1:403665913628:web:10604058720f82c0265cd9",
  measurementId: "G-RFRQPE7NJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);