import {auth, db} from './firebaseConfig';
import {doc, setDoc, getDoc } from 'firebase/firestore';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const SignUpNewUser = async (username: string, email: string, password : string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if (username) {
            await updateProfile(user, {displayName: username});
        }
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            username: username,
            email: email,
            alarmTimes: ["08:00", "08:00", "08:00", "08:00", "08:00", "08:00", "08:00"],
            actualTime: null,
            dayScore: 0,
            monthScore: 0,
            friends: [],
            notifBool: true,
            publicBool: true,
            ldMode: 1, 
            count: 0
        });
        const docRef = doc(db, "users", user.uid);
        const userData = (await getDoc(docRef)).data();
        return userData;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const SignInUser = async (email : string, password : string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const docRef = doc(db, "users", user.uid);
        const userData = (await getDoc(docRef)).data();
        if (!userData) {
            console.error('No user found in Firestore for the signed-in user');
            return {status: 'notFoundInFirestore', user: null};
        }
        else {
            return {status: 'success!', userData: userData};
        }
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};