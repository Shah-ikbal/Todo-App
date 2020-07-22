
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   
        apiKey: "AIzaSyB_xceh1gaVOnevNeb-1m6xKVFrdWsu6ZY",
        authDomain: "todo-app-cp-f7cab.firebaseapp.com",
        databaseURL: "https://todo-app-cp-f7cab.firebaseio.com",
        projectId: "todo-app-cp-f7cab",
        storageBucket: "todo-app-cp-f7cab.appspot.com",
        messagingSenderId: "184515607929",
        appId: "1:184515607929:web:6ae98c8178108d19e143a8",
        measurementId: "G-G4EVD4NX6H"
    

});

const db = firebaseApp.firestore();

export default db;

  