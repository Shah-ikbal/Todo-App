
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   
        apiKey: "your_api_key",
        authDomain: "your_created_authDomain",
        databaseURL: "https://todo-app-cp-f7cab.firebaseio.com",
        projectId: "todo-app-cp-f7cab",
        storageBucket: "todo-app-cp-f7cab.appspot.com",
        messagingSenderId: "184515607929",
        appId: "your_app_id",
        measurementId: "G-G4EVD4NX6H"
    

});

const db = firebaseApp.firestore();

export default db;

  
