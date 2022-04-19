
import { ref, onUnmounted } from 'vue';
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
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const db = firebaseApp.firestore()

//Routines Categories
const routineCategoriesCollection = db.collection('Categorias_rutinas')

export const createroutineCategories = category => {
    return routineCategoriesCollection.add(category)
}

export const getroutineCategory = async id => {
    const category = await routineCategoriesCollection.doc(id).get()
    return category.exists ? category.data() : null
}

export const useLoadroutineCategories = () => {
    const categories = ref([])
    const close = routineCategoriesCollection.onSnapshot(snapshot => {
        categories.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    }) 
    onUnmounted(close)
    return categories
}
