// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvBDl76lgL8HfipiyeGdwLaIi6Y2B_9nA",
  authDomain: "otp-project-576c3.firebaseapp.com",
  projectId: "otp-project-576c3",
  storageBucket: "otp-project-576c3.appspot.com",
  messagingSenderId: "225776123886",
  appId: "1:225776123886:web:89fd9bb9240d34712058ff",
  measurementId: "G-0NCHK3HSJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

