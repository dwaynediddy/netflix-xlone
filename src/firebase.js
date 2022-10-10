import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyDIkBxKlmg7kEZIKFy10AbPvWmOYDjaQPw",
    authDomain: "netflix-xclone.firebaseapp.com",
    projectId: "netflix-xclone",
    storageBucket: "netflix-xclone.appspot.com",
    messagingSenderId: "942586859604",
    appId: "1:942586859604:web:f27e34c57126a100f5ddc1"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export { auth }

  export default db;