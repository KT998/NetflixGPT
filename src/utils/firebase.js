// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3_zwhs7hzEu7gF1DqOwZhMALzkqHibMY",
  authDomain: "netflix-gpt-f5ede.firebaseapp.com",
  projectId: "netflix-gpt-f5ede",
  storageBucket: "netflix-gpt-f5ede.firebasestorage.app",
  messagingSenderId: "369177890304",
  appId: "1:369177890304:web:a939fdb57c3e194e2152e5",
  measurementId: "G-2TQL0RCY8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();