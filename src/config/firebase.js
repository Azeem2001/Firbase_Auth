import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt9ELtmrFoGsWtGNIFZheCfTFQMzRYT1Q",
  authDomain: "auth-with-database.firebaseapp.com",
  projectId: "auth-with-database",
  storageBucket: "auth-with-database.appspot.com",
  messagingSenderId: "256596412859",
  appId: "1:256596412859:web:56bbf9125e320db0d0dc9e",
  measurementId: "G-JNV8RL2V4J",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
