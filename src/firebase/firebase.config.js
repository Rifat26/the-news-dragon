// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkREnRouXMEagD5iXf4l8c6ZFf_zkzbkA",
  authDomain: "the-news-dragon-acec4.firebaseapp.com",
  projectId: "the-news-dragon-acec4",
  storageBucket: "the-news-dragon-acec4.appspot.com",
  messagingSenderId: "208339802884",
  appId: "1:208339802884:web:31e7f300a7d610af3cce51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;