import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVUwYhI2dm2X5xwvyV6TxCaoTuGmw2ITs",
    authDomain: "whatsapp-clone-ef1c0.firebaseapp.com",
    projectId: "whatsapp-clone-ef1c0",
    storageBucket: "whatsapp-clone-ef1c0.appspot.com",
    messagingSenderId: "150134597493",
    appId: "1:150134597493:web:13920c470ca5924d58d53c",
    measurementId: "G-S3HXSDT6EB"
  };
   const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;