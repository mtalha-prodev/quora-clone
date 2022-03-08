import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWXgs30KFxh0TdW3PdFmgpO0aBrLXtPek",
  authDomain: "quora-clone-mt.firebaseapp.com",
  projectId: "quora-clone-mt",
  storageBucket: "quora-clone-mt.appspot.com",
  messagingSenderId: "381067411068",
  appId: "1:381067411068:web:1f71b313c7121c886dd3f9",
  measurementId: "G-0J44GKSFK1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export { auth, provider };
export default db;
