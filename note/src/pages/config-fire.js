// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyD7UPj_qip9g6LBAdg_BzEmlDsdgFH5J4o",
    authDomain: "project-note-9d4df.firebaseapp.com",
    projectId: "project-note-9d4df",
    storageBucket: "project-note-9d4df.appspot.com",
    messagingSenderId: "1081447957126",
    appId: "1:1081447957126:web:1df7c85200d7a8a7ddc707",
    measurementId: "G-CD7S37W7CB"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
