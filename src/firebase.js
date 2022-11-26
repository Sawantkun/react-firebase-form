import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyAwwfYIhchKSFWEJ8-1LGtm5-msvwcDPMU",
    authDomain: "react-form-de027.firebaseapp.com",
    databaseURL: "https://react-form-de027-default-rtdb.firebaseio.com",
    projectId: "react-form-de027",
    storageBucket: "react-form-de027.appspot.com",
    messagingSenderId: "922921938235",
    appId: "1:922921938235:web:936a15ff6acd22c2129b1e"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

  export default db;