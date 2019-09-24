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

// in case we need access to whole library where else
export default firebase;