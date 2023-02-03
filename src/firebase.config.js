import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDdhcS7VUjMHqSeHBeTQXKLZTMln1piyDQ",
    authDomain: "ecommerce-project-be714.firebaseapp.com",
    projectId: "ecommerce-project-be714",
    storageBucket: "ecommerce-project-be714.appspot.com",
    messagingSenderId: "937821300201",
    appId: "1:937821300201:web:dc911550797b7632001778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
