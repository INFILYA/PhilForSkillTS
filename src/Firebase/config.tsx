import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoQqCO6jmqpyGHmVZqhV98DpalmGX7Uqk",
  authDomain: "philforskill-ts.firebaseapp.com",
  projectId: "philforskill-ts",
  storageBucket: "philforskill-ts.appspot.com",
  messagingSenderId: "527028251871",
  appId: "1:527028251871:web:60d81f6c62ca409941cd6a",
  measurementId: "G-EQVYX95CV1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const dataBase = getFirestore(app);
export const storage = getStorage(app);
