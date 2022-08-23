// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPATTwDRDRN6J5zQKzjVFwFG84hjcy9VI",
  authDomain: "blogproject-120c2.firebaseapp.com",
  projectId: "blogproject-120c2",
  storageBucket: "blogproject-120c2.appspot.com",
  messagingSenderId: "971078511832",
  appId: "1:971078511832:web:e05f548185153d7556fbad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
