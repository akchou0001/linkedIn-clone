import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAeHU7Ttk2eLTeJWqbfua6qB566UIKByMQ",
  authDomain: "linkedin-clone-c441e.firebaseapp.com",
  projectId: "linkedin-clone-c441e",
  storageBucket: "linkedin-clone-c441e.appspot.com",
  messagingSenderId: "675465943425",
  appId: "1:675465943425:web:5d2b2185bcb5cdec63f080",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
