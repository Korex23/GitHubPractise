import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD96cPD5XBJkh22IwlTNK4vS0C_EgcwWsc",
  authDomain: "practice-79f27.firebaseapp.com",
  projectId: "practice-79f27",
  storageBucket: "practice-79f27.appspot.com",
  messagingSenderId: "1058901030493",
  appId: "1:1058901030493:web:2b88a1234d9c046d9b7fb4",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
