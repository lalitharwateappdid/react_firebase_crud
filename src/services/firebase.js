// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.meta.env.FIREBASE_API_KEY,
  authDomain: process.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: process.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.meta.env.FIREBASE_MESSAGING_ID,
  appId: process.meta.env.FIREBASE_APP_ID,
  measurementId: process.meta.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);