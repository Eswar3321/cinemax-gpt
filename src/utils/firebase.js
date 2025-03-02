// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxZw1SZqcfx6kyyfYZQHv-_ks4d7cGF5Y",
  authDomain: "netflix-gpt-59762.firebaseapp.com",
  projectId: "netflix-gpt-59762",
  storageBucket: "netflix-gpt-59762.firebasestorage.app",
  messagingSenderId: "54505767507",
  appId: "1:54505767507:web:20d8c836d4006a28ffbca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();