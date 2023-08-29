// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxZjw-SdEVuIA-SvuWmgOg2uZPx5k3wSs",
  authDomain: "react-netflix-519d2.firebaseapp.com",
  projectId: "react-netflix-519d2",
  storageBucket: "react-netflix-519d2.appspot.com",
  messagingSenderId: "254571008932",
  appId: "1:254571008932:web:8819ded64ef78f373b2731",
  measurementId: "G-QY1YB5HJCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);