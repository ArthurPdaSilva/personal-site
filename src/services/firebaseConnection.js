import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSZzkALr2eJ8MgqPlqoTrrJOi8lvBU1f8",
  authDomain: "persona-site.firebaseapp.com",
  projectId: "persona-site",
  storageBucket: "persona-site.appspot.com",
  messagingSenderId: "946443161071",
  appId: "1:946443161071:web:e35dd25642b10d0a253a1a",
  measurementId: "G-3DGDK8SRY4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();