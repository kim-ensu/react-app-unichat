import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDnNDepb1t94N7frG81gsCRikp4KEA6zf4",
    authDomain: "unichat-fc63e.firebaseapp.com",
    projectId: "unichat-fc63e",
    storageBucket: "unichat-fc63e.appspot.com",
    messagingSenderId: "126697604149",
    appId: "1:126697604149:web:95b49f7c8811da859a5d7c",
  })
  .auth();
