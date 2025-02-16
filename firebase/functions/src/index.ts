import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

interface AddUserRequestData {
  userId: string;
  // Add other properties you expect from the client here
}

// Define a Firebase Callable Function named 'addUserToFirestore' (using onCall)
export const addUserToFirestore = functions.https.onCall(async (data: unknown, context) => {
  try {
    // 1. Get Firestore instance
    const db = admin.firestore();

    // 2. User data (you can pass data from the Android app in the 'data' parameter)
    const { userId } = data as AddUserRequestData;

    if (!userId) {
      throw new functions.https.HttpsError('invalid-argument', 'Missing required parameters: userId, name, email.');
    }

    const userData = {
      userId: userId,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };

    // 3. Add user to Firestore
    const userRef = db.collection('users').doc(userId);
    await userRef.set(userData);

    // 4. Success response (you can return data back to the Android app)
    return {
      message: `User with ID '${userId}' successfully added to Firestore!`,
      userData: userData
    };

  } catch (error) {
    // 5. Error handling for Callable Functions
    if (error instanceof functions.https.HttpsError) {
      throw error; // Re-throw HttpsErrors to be properly handled by the client SDK
    } else {
      console.error("Error adding user to Firestore:", error);
      throw new functions.https.HttpsError('internal', 'Failed to add user to Firestore.', error); // Convert other errors to HttpsError
    }
  }
});