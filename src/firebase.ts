// Import the functions you need from the SDKs you need
/*import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';*/
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBqBU-39qckuoC_d9WzlZI-Pi4bIl4nHc4",
    authDomain: "todo-web-1f4da.firebaseapp.com",
    projectId: "todo-web-1f4da",
    storageBucket: "todo-web-1f4da.appspot.com",
    messagingSenderId: "851343993439",
    appId: "1:851343993439:web:cbc9719cac67aa0db089ea",
    measurementId: "G-KYM2QGZ1LT"
};

const app = initializeApp(firebaseConfig)

// Initialize Firebase


// Initialize other Firebase services
/*const auth = getAuth(app); // Initialize Auth
const firestore = getFirestore(app);*/ // Initialize Firestore

export default app;
