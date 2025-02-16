// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, arrayUnion, query, where, arrayRemove,  runTransaction } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-RsvnoxULY_paNkn7SsNRPoUlP000GRo",
  authDomain: "zaoshanghao-1aee2.firebaseapp.com",
  projectId: "zaoshanghao-1aee2",
  storageBucket: "zaoshanghao-1aee2.firebasestorage.app",
  messagingSenderId: "639556049886",
  appId: "1:639556049886:web:3f12402b5adef6ff265b4f",
  measurementId: "G-8L355PJTYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function createUser(userName: string) {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
        name: userName
    });
    
    const docSnapshot = await getDoc(docRef);
    
    if (docSnapshot.exists()) {
      // Return the data of the document
      return docSnapshot.data();
    } else {
      console.error('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error adding document: ', error);
    return null;
  }
}

export {createUser};

// import { SignUpNewUser, SignInUser, toggleNotifs, getUserInfo } from "./users/users";
// import { addMessNotification} from "./notifs/notifications";
// import { createRoom, assignChorestoRooms, assignUser } from "./rooms/rooms.js";
// import { createHouse, inviteUserToHouse, verifyInvite, getHousemates, swapTimeChecker, assignChorestoHouse} from './houses/houses.js';
// import { createChore, assignChorestoUsers, checkDueDate, updateStatus, getXUsersChoreData, getXUsersChoreDataPersonal, redistributeChores, newSignintoHouseSwapChores } from './chores/chores.js';

// export { app, auth, db, SignUpNewUser, SignInUser, getUserInfo, createHouse, inviteUserToHouse, getHousemates, toggleNotifs, createChore, assignChorestoUsers, checkDueDate, updateStatus, createRoom, assignChorestoRooms, assignUser, getXUsersChoreData, getXUsersChoreDataPersonal, assignChorestoHouse, swapTimeChecker, redistributeChores,newSignintoHouseSwapChores, verifyInvite, addMessNotification };