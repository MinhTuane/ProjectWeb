// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF28ZHGChXuLQEnhDIaRlACaGNTSgmiDM",
  authDomain: "project-main-manufacture.firebaseapp.com",
  projectId: "project-main-manufacture",
  storageBucket: "project-main-manufacture.appspot.com",
  messagingSenderId: "1015318297520",
  appId: "1:1015318297520:web:11727571eb84cd365bf475",
  measurementId: "G-EHR9F4YXSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);