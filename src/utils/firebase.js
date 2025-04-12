// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtjyEHkIuTQPYcBCpEi9q2hT0xhP4XpCc",
  authDomain: "cinemax-gpt.firebaseapp.com",
  projectId: "cinemax-gpt",
  storageBucket: "cinemax-gpt.firebasestorage.app",
  messagingSenderId: "616111491923",
  appId: "1:616111491923:web:01fb3fa970941bf87b6fa6",
  measurementId: "G-J3B97JKNPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
