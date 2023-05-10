// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBGVOZP5cIKDBnBV95DH1cMs36Bi0EOpPw",
  authDomain: "project-lab-notes-70808.firebaseapp.com",
  projectId: "project-lab-notes-70808",
  storageBucket: "project-lab-notes-70808.appspot.com",
  messagingSenderId: "787443379286",
  appId: "1:787443379286:web:475d4dab8c327d64dadff7",
  measurementId: "G-YB22ZN0MB7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const analytics = getAnalytics(app);//
export const db = getFirestore(app);