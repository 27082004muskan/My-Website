// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDnao_2uufsEGNDmTOuOcxCld2DFm5RbTU",
  authDomain: "mywebsite-6f99b.firebaseapp.com",
  projectId: "mywebsite-6f99b",
  storageBucket: "mywebsite-6f99b.firebasestorage.app",
  messagingSenderId: "922780497385",
  appId: "1:922780497385:web:d3e476ba26c73fffe44778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);
