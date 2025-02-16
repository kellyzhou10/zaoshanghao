import {auth, db} from './firebaseConfig';
import { collection, doc, getDoc, getDocs, query, where, arrayUnion, arrayRemove, updateDoc } from 'firebase/firestore';

export const requestFriend = async (userId: string) => {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('User not logged in');
        }
        const docRef = doc(db, "users", userId);
        await updateDoc(docRef, {awaitAccept: arrayUnion(user.uid)});
    } catch (error) {
        console.error('Error adding friend:', error);
        throw error;
    }
};

export const acceptFriend = async (userId: string) => {
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
        const awaitAcceptArray = userData.awaitAccept;
        if (!awaitAcceptArray.includes(userId)) {
            console.log("User not found in friend requests");
            return;
        }
        await updateDoc(docRef, { awaitAccept: arrayRemove(userId)});
        await updateDoc(docRef, { friends: arrayUnion(userId)});
        const newFriendDocRef = doc(db, "users", userId);
        await updateDoc(newFriendDocRef, { friends: arrayUnion(user.uid)});
        const newFriendData = (await getDoc(newFriendDocRef)).data();
        return newFriendData;
    } catch (error) {
        console.error('Error accepting friend:', error);
        throw error;
    }
};

export const setAlarms = async (alarms: Array<string>) => {

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
