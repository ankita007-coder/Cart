import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// v9 compat packages are API compatible with v8 code
//import { initializeApp } from 'firebase/app';
//import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_j9vinNLt3MfdLTkVBNa3yeBYCaV9BXo",
  authDomain: "cart-29843.firebaseapp.com",
  projectId: "cart-29843",
  storageBucket: "cart-29843.appspot.com",
  messagingSenderId: "573256362707",
  appId: "1:573256362707:web:99589ca2667e60782ec226"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


