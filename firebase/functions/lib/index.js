"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserToFirestore = void 0;
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
admin.initializeApp();
// Define a Firebase Callable Function named 'addUserToFirestore' (using onCall)
exports.addUserToFirestore = functions.https.onCall(async (data, context) => {
    try {
        // 1. Get Firestore instance
        const db = admin.firestore();
        // 2. User data (you can pass data from the Android app in the 'data' parameter)
        const { userId } = data;
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
    }
    catch (error) {
        // 5. Error handling for Callable Functions
        if (error instanceof functions.https.HttpsError) {
            throw error; // Re-throw HttpsErrors to be properly handled by the client SDK
        }
        else {
            console.error("Error adding user to Firestore:", error);
            throw new functions.https.HttpsError('internal', 'Failed to add user to Firestore.', error); // Convert other errors to HttpsError
        }
    }
});
//# sourceMappingURL=index.js.map