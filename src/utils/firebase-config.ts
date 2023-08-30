// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRHNdvXXe0GZRT0J_AypdFnSkeAsgUCEM",
  authDomain: "netflixgpt-5052f.firebaseapp.com",
  projectId: "netflixgpt-5052f",
  storageBucket: "netflixgpt-5052f.appspot.com",
  messagingSenderId: "861673794434",
  appId: "1:861673794434:web:7ad48cbf69dadd0f453d9b",
  measurementId: "G-EJZFY908V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);