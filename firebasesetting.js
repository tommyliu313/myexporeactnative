// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtKWHnDDN55c7eLzl4Q2-8RxN1XWglvHQ",
  authDomain: "react-native-course-586c5.firebaseapp.com",
  projectId: "react-native-course-586c5",
  storageBucket: "react-native-course-586c5.appspot.com",
  messagingSenderId: "961874271249",
  appId: "1:961874271249:web:a66be30e8965fee942e5b0",
  measurementId: "G-7LLPEQCV2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
