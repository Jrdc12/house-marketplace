import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyvy392nktpS0bxqiHz0mhq7pluKXfinY",
  authDomain: "house-marketplace-app-d8987.firebaseapp.com",
  projectId: "house-marketplace-app-d8987",
  storageBucket: "house-marketplace-app-d8987.appspot.com",
  messagingSenderId: "830075741058",
  appId: "1:830075741058:web:f45cfdaf64e14bc600659b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();