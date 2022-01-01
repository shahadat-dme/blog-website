// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyV1hU0rOjtmWYaFTQ16xW4Um72cmXW_Y",
  authDomain: "blog-website-d2baa.firebaseapp.com",
  projectId: "blog-website-d2baa",
  storageBucket: "blog-website-d2baa.appspot.com",
  messagingSenderId: "659353176336",
  appId: "1:659353176336:web:ae02e9652f070b419ebd95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();