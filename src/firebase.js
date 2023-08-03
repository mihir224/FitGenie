import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "fit-genie.firebaseapp.com",
  projectId: "fit-genie",
  storageBucket: "fit-genie.appspot.com",
  messagingSenderId: "823474161080",
  appId: "1:823474161080:web:a210bf739d777b7a627b4d",
  measurementId: "G-28RFB30BSG"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();

export default app;