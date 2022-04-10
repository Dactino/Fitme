import { createApp } from 'vue';
import App from "./App.vue";
import router from "./routes/index.js";
import './index.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDY0JVAb2hjKgFt6F5mFbLTvWMKbvY7gtU",
    authDomain: "fitme-750c0.firebaseapp.com",
    databaseURL: "https://fitme-750c0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fitme-750c0",
    storageBucket: "fitme-750c0.appspot.com",
    messagingSenderId: "642699967458",
    appId: "1:642699967458:web:27d48be9a712b84ccf17bb"
};

// Use this to initialize the firebase App
firebase.initializeApp(firebaseConfig);

// Use these for db & auth
//const db = firebaseApp.firestore();
//const auth = firebase.auth();

createApp(App).use(router).mount('#app')
