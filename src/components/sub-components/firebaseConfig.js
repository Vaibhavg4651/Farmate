// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjvEpovmqGI-NBU6WXzKrgiE4BCe64f0w",
  authDomain: "farmate-6aad4.firebaseapp.com",
  projectId: "farmate-6aad4",
  storageBucket: "farmate-6aad4.appspot.com",
  messagingSenderId: "1021542034990",
  appId: "1:1021542034990:web:5dfdb31b6f8ff6f418f9bf",
  measurementId: "G-RM56QGXSTC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



