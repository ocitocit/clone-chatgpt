import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCiXMUYAwsS5AUH9kOLYunjbwJA0PRnayY',
  authDomain: 'chat-gpt-clone-7faa7.firebaseapp.com',
  projectId: 'chat-gpt-clone-7faa7',
  storageBucket: 'chat-gpt-clone-7faa7.appspot.com',
  messagingSenderId: '95137140557',
  appId: '1:95137140557:web:b25af9437129c9c4e8b104'
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
