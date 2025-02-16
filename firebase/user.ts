import {auth, db} from './firebaseConfig';
import { collection, doc, getDoc, getDocs, query, where, addDoc, updateDoc } from 'firebase/firestore';

export const addFriend = async (userId: string) => {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('User not logged in');
        }
        const docRef = doc(db, "users", user.uid);
        const userData = (await getDoc(docRef)).data();
        if (!userData) {
            throw new Error('No user data');
        }
        
    } catch (error) {
        console.error('Error adding friend:', error);
        throw error;
    }
};

export const acceptFriend = async () => {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('User not logged in');
        }
        const docRef = doc(db, "users", user.uid);
        const userData = (await getDoc(docRef)).data();
        if (!userData) {
            throw new Error('No user data');
        }
        const querySnapshot = await getDocs(query(collection(db, "friends"), where("accepted", "==", false), where("requestedBy", "==", user.uid)));
        if (querySnapshot.empty) {
            throw new Error('No pending friend requests');
        }
        const friendDocRef = doc(db, "friends", querySnapshot.docs[0].id);
        await updateDoc(friendDocRef, {accepted: true});
    } catch (error) {
        console.error('Error accepting friend:', error);
        throw error;
    }
};

export const setAlarms = async () => {

}

export const toggleNotifs = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('User not logged in');
    }
    const docRef = doc(db, "users", user.uid);
    const userData = (await getDoc(docRef)).data();
    if (!userData) {
        throw new Error('No user data');
      }
    await updateDoc(docRef, {notifBool: !userData.notifBool});
  } catch (error) {
    console.error('Error toggling notifications:', error);
    throw error;
  }
};

export const togglePublic = async () => {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('User not logged in');
        }
        const docRef = doc(db, "users", user.uid);
        const userData = (await getDoc(docRef)).data();
        if (!userData) {
            throw new Error('No user data');
        }
        await updateDoc(docRef, {publicBool: !userData.publicBool});
    } catch (error) {
        console.error('Error toggling public:', error);
        throw error;
    }
  };

export const getUserInfo = async (userId: string) => {
    try {
        const docRef = doc(db, "users", userId);
        const userData = (await getDoc(docRef)).data();
        return userData;
    } catch (error) {
        console.error('Error getting user info:', error);
        throw error;
    }
};
