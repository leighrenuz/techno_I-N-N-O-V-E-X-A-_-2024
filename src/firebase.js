import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD18raDqkTMGUCyVTNWF8WNdtmMcnGt8-E",
  authDomain: "apply-gabay.firebaseapp.com",
  projectId: "apply-gabay",
  storageBucket: "apply-gabay.firebasestorage.app",
  messagingSenderId: "448070800158",
  appId: "1:448070800158:web:d2152d8d6a8471d4dd2f0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
