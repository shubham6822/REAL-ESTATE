// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeEaEZiaAjPUnBA9fCJxt2h1ovgnPnjWQ",
  authDomain: "mern-estate-4103d.firebaseapp.com",
  projectId: "mern-estate-4103d",
  storageBucket: "mern-estate-4103d.appspot.com",
  messagingSenderId: "530196489250",
  appId: "1:530196489250:web:02fc77f1290c7986dc167b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);