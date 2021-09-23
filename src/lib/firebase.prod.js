import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBP8K4i2z3hKMkbeSqo52KC0vB82gLZFjM",
  authDomain: "netflix-7f98b.firebaseapp.com",
  projectId: "netflix-7f98b",
  storageBucket: "netflix-7f98b.appspot.com",
  messagingSenderId: "198748175581",
  appId: "1:198748175581:web:61d5bee200c2347400af34",
};

initializeApp(firebaseConfig);

export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();
// seedDatabase(app);
