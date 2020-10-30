import firebase from "firebase";

// below 3 steps are standard to initialise app and db
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDnaNFmme3bbxJQlaRgIvP0fCV-2tDlKRM",
  authDomain: "yamini-insta-clone.firebaseapp.com",
  databaseURL: "https://yamini-insta-clone.firebaseio.com",
  projectId: "yamini-insta-clone",
  storageBucket: "yamini-insta-clone.appspot.com",
  messagingSenderId: "447664823279",
  appId: "1:447664823279:web:9d6617a1e705e7a6a0341a",
  measurementId: "G-LWS41DF6Z3"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
