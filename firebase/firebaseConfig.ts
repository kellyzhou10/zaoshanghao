import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { SignUpNewUser, SignInUser } from "./auth";
import { requestFriend, acceptFriend, setAlarms, toggleNotifs, togglePublic, getUserInfo } from "./user";

const firebaseConfig = {
  apiKey: "AIzaSyC-RsvnoxULY_paNkn7SsNRPoUlP000GRo",
  authDomain: "zaoshanghao-1aee2.firebaseapp.com",
  projectId: "zaoshanghao-1aee2",
  storageBucket: "zaoshanghao-1aee2.firebasestorage.app",
  messagingSenderId: "639556049886",
  appId: "1:639556049886:web:3f12402b5adef6ff265b4f",
  measurementId: "G-8L355PJTYX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { 
  app, 
  auth, 
  db, 
  SignUpNewUser, 
  SignInUser, 
  requestFriend, 
  acceptFriend, 
  setAlarms, 
  toggleNotifs, 
  togglePublic, 
  getUserInfo 
};