import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbjbXCVwdl7e3x_aYopyWW78xsLEUW35U",
  authDomain: "video-stream-app-3ff71.firebaseapp.com",
  projectId: "video-stream-app-3ff71",
  storageBucket: "video-stream-app-3ff71.appspot.com",
  messagingSenderId: "292914487331",
  appId: "1:292914487331:web:dee30078968c7771a85196",
  measurementId: "G-ND6J4BJ690",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export default { db, auth };
