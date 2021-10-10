// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import  { getFirestore, doc, getDoc, setDoc,} from "firebase/firestore";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfljuePA-JEwBMuccbtQ6npPRsd44o6LA",
  authDomain: "shopproject-48315.firebaseapp.com",
  projectId: "shopproject-48315",
  storageBucket: "shopproject-48315.appspot.com",
  messagingSenderId: "141248866271",
  appId: "1:141248866271:web:763d73026c3f444ead866a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
// exportƒconst firestore = firebase.firestore();

export const storeUserToFirestore = async (user, otherData) => {
  if(!user) return;

  const userRef = doc(db, `users/${user.uid}`);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    // doc.data() will be undefined in this case
    
    const {displayName, email} = user;
    const createAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createAt,
        ...otherData
      });
    
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  return userRef;
}



const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
  });
  
export const signInWithGoogle = () => signInWithPopup(auth, provider);
