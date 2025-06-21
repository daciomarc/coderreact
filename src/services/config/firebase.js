// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCs-p-8ttepry0V1yd5T4PgM7-rlkLfBd8",
  authDomain: "codertest-12eb4.firebaseapp.com",
  projectId: "codertest-12eb4",
  storageBucket: "codertest-12eb4.firebasestorage.app",
  messagingSenderId: "54430718749",
  appId: "1:54430718749:web:2a795a50bbf71c7bbc5ff4",
  measurementId: "G-2XK74ZHV9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);  