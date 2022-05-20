import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNq-OaQ2_cZCXLakK9V9NKDEJJAA9j-xc",
  authDomain: "burger-queen-828b1.firebaseapp.com",
  projectId: "burger-queen-828b1",
  storageBucket: "burger-queen-828b1.appspot.com",
  messagingSenderId: "705419423370",
  appId: "1:705419423370:web:dc2eff0452b87dc2fe4773",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const secondaryApp = initializeApp(firebaseConfig, 'Secondary')


