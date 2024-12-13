
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-Do6uBMJdr9-_CyDpwTzwjuC_KzJN2cQ",
    authDomain: "user-interface-similar-insta.firebaseapp.com",
    projectId: "user-interface-similar-insta",
    storageBucket: "user-interface-similar-insta.firebasestorage.app",
    messagingSenderId: "859083037653",
    appId: "1:859083037653:web:bd7e3ef84969a968c07b5c",
    measurementId: "G-5PENM3RRT0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
