import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAWv-SKhG82OdyohBwal52h_v34pT9R67o",
    authDomain: "crwn-store-5b19e.firebaseapp.com",
    databaseURL: "https://crwn-store-5b19e.firebaseio.com",
    projectId: "crwn-store-5b19e",
    storageBucket: "",
    messagingSenderId: "409619981491",
    appId: "1:409619981491:web:29fc0c07350defe6003cc6"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


// Code for create and store user on firestore database
export const createUserProfileDocument = async (userAuth, addtionalData) => {
    // Params : userAuth--> user object we get from sign-in with google.
    //          additionalData--> for later use, like sign-up.

    // Query to see if user exists, if not persist new user to db
    if(!userAuth) return;

    // NOTE: this is just getting reference, not performing any network operations/ or CRUD
    // hence there's no need to await.
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //NOTE: should probably wrap all CRUD operations in try/catch.
    const userSnapshot = await userRef.get();

    if(!userSnapshot.exists) {
        console.log('user does not exist, store user to DB');
        const {email, displayName} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            })
        } catch(error) {
            console.log('error creating user: ' + error.message);
        }
    }

    // in case client code needs to do something with userRef
    return userRef;
}

// in case we need access to whole library where else
export default firebase;