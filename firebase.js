// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMQP42tdPyyn11H5wYNNVIWIeOMdATIiQ",
  authDomain: "kiran-app-1.firebaseapp.com",
  projectId: "kiran-app-1",
  storageBucket: "kiran-app-1.appspot.com",
  messagingSenderId: "874280272311",
  appId: "1:874280272311:web:a67a303407d15b4cbaa832",
  measurementId: "G-LWJX3ZSYL1"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}
const auth = firebase.auth()
const analytics = getAnalytics(app);

export {auth};