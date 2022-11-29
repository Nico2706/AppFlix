// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAdJtF-poJMu_g6EnMTxkbQkfCMdaWqVek",
  authDomain: "appflix-react.firebaseapp.com",
  projectId: "appflix-react",
  storageBucket: "appflix-react.appspot.com",
  messagingSenderId: "596735378507",
  appId: "1:596735378507:web:0e40beb7b29f52588c79ce"
};

// Initialize Firebase

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)