import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx-rR0SqJ9WpHYXjci1o4XpTZapPlDndM",
  authDomain: "sproject-f2667.firebaseapp.com",
  projectId: "sproject-f2667",
  storageBucket: "sproject-f2667.appspot.com",
  messagingSenderId: "659975981756",
  appId: "1:659975981756:web:c8497852b10a68d591deb9",
  measurementId: "G-3S2T64EHRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//


createApp(App).mount('#app')
