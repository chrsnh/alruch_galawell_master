import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk-B7c_0si_1bc7AAchVixrd5sT-ehpTM",
  authDomain: "alruch.firebaseapp.com",
  projectId: "alruch",
  storageBucket: "alruch.appspot.com",
  messagingSenderId: "1056133739534",
  appId: "1:1056133739534:web:c5f69900bd96e80cbd385f",
  measurementId: "G-5FCYE2VHH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();