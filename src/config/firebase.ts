import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDAtL7YQxQxQXIZW0YKAu5OBx_9aRcQIMw",
  authDomain: "artigala-spices.firebaseapp.com",
  projectId: "artigala-spices",
  storageBucket: "artigala-spices.firebasestorage.app",
  messagingSenderId: "490578986157",
  appId: "1:490578986157:web:da23a90235092cb3567224",
  measurementId: "G-ZKR2FZG2G7"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;