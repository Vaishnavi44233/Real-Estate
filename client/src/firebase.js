// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-71d95.firebaseapp.com",
  projectId: "mern-estate-71d95",
  storageBucket: "mern-estate-71d95.appspot.app",
  messagingSenderId: "159434744402",
  appId: "1:159434744402:web:405d2497ecdce09de1758b",
  measurementId: "G-TFNLB6F5DL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
