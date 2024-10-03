// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBo5HEw0GZ2o10jLFnYX4PLsscFdiFg4ac",
    authDomain: "late-days-db.firebaseapp.com",
    projectId: "late-days-db",
    storageBucket: "late-days-db.appspot.com",
    messagingSenderId: "1066123912004",
    appId: "1:1066123912004:web:d47a88dc38fb3b4721ad11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);