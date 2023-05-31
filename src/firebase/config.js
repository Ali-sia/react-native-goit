import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: 'AIzaSyCzPYhnQCtwbxwypdhWGCQyWuFjY2BfLpU',
//   authDomain: 'goit-social.firebaseapp.com',
//   databaseURL: 'https://goit-social.firebaseio.com',
//   projectId: 'goit-social',
//   storageBucket: 'goit-social.appspot.com',
//   appId: '1:711398970416:android:c3174357c48f2fc53f09f5 ',
// };
// import * as firebase from 'firebase';
// import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCzPYhnQCtwbxwypdhWGCQyWuFjY2BfLpU',
  authDomain: 'goit-social.firebaseapp.com',
  projectId: 'goit-social',
  storageBucket: 'goit-social.appspot.com',
  messagingSenderId: '711398970416',
  appId: '1:711398970416:web:65985a86f2573f103f09f5',
  measurementId: 'G-S52V7MF4GF',
};

// export default firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
//
export const auth = getAuth(app);
export const storage = getStorage(app);
export const dbFirestore = getFirestore(app);
