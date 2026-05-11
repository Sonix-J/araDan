// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdY0WXk66HEs_BedRzht8DQHxSP0rFbHI",
  authDomain: "finalpractical-6c85b.firebaseapp.com",
  projectId: "finalpractical-6c85b",
  storageBucket: "finalpractical-6c85b.firebasestorage.app",
  messagingSenderId: "514031684299",
  appId: "1:514031684299:web:5e52c72364d751b361e94e",
  measurementId: "G-YF4P0QRFJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };