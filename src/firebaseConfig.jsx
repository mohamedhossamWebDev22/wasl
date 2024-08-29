// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG6i1I9GxWq2iUKdDCn9DR_p9ZfSQAF8E",
  authDomain: "wasl-1.firebaseapp.com",
  projectId: "wasl-1",
  storageBucket: "wasl-1.appspot.com",
  messagingSenderId: "1022061149566",
  appId: "1:1022061149566:web:b2b955941c73557042c72f",
  measurementId: "G-82NEVW1V7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);