import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDYdPh4pXdCSygVGY99jWIpYlmp_bUxfFA",
  authDomain: "hogwash-a43bc.firebaseapp.com",
  databaseURL: "https://hogwash-a43bc.firebaseio.com",
  projectId: "hogwash-a43bc",
  storageBucket: "hogwash-a43bc.appspot.com",
  messagingSenderId: "876850204689",
  appId: "1:876850204689:web:2bc2a078e7225d694ae1b0",
  measurementId: "G-J19TLHE3SP",
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

const database = firebase.database();

export { firebase, database as default };
