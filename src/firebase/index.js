import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqeGsTbcwNA83TBBQ-QOd0swZ7onC4vnk",
  authDomain: "nbg-game.firebaseapp.com",
  projectId: "nbg-game",
  storageBucket: "nbg-game.appspot.com",
  messagingSenderId: "1044788655921",
  appId: "1:1044788655921:web:5f808ccf3141f22aaea210",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();
const functions = getFunctions();
const auth = getAuth(app);

export { db, storage, functions, auth };
