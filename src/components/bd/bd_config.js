import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDY0JVAb2hjKgFt6F5mFbLTvWMKbvY7gtU",
    authDomain: "fitme-750c0.firebaseapp.com",
    databaseURL: "https://fitme-750c0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fitme-750c0",
    storageBucket: "fitme-750c0.appspot.com",
    messagingSenderId: "642699967458",
    appId: "1:642699967458:web:27d48be9a712b84ccf17bb"
  }; 

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export default database;

