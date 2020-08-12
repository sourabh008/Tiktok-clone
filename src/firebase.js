
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD50d-dn1ey1Sn5968Ks9oAVexjblvddho",
    authDomain: "tiktok-clone-872cc.firebaseapp.com",
    databaseURL: "https://tiktok-clone-872cc.firebaseio.com",
    projectId: "tiktok-clone-872cc",
    storageBucket: "tiktok-clone-872cc.appspot.com",
    messagingSenderId: "251957558181",
    appId: "1:251957558181:web:81a9d7d748b4eae00b464c",
    measurementId: "G-CBHHTJSNP1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;