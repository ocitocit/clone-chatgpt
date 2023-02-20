import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLbiT4F8pZj4Tos0fMhG3_uDlipZjMdJg",
  authDomain: "new-clone-chatgpt.firebaseapp.com",
  projectId: "new-clone-chatgpt",
  storageBucket: "new-clone-chatgpt.appspot.com",
  messagingSenderId: "253572357842",
  appId: "1:253572357842:web:0439b4c6be4c2d01a6970b"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
