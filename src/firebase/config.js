
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCKjbL8MerKVSIbiOR39ApY8-uzEx5qdeY",
  authDomain: "recepies-a7807.firebaseapp.com",
  projectId: "recepies-a7807",
  storageBucket: "recepies-a7807.firebasestorage.app",
  messagingSenderId: "563493444425",
  appId: "1:563493444425:web:e1965609b6d71c9dfd5898"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()