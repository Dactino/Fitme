
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

//Se puede extraer todas las rutinas y ejercicios cuando el cliente carga la página, y con cada función extraer una u otra tabla y retornarla, haciendo que la carga de estos sea mucho más rápida

export const getRoutineCategories = () => {
    const categories = ref([])
    const close = routineCategoriesCollection.onSnapshot(snapshot => {
        categories.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    }) 
    onUnmounted(close)
    return categories
}

//Routines
const routinesCollection = db.collection('routines')

export const createRoutine = routine => {
    return routinesCollection.add(routine)
}

export const deleteRoutine = id => {
    return routinesCollection.doc(id).delete()
}

export const getRoutine = async id => {
    const routine = await routinesCollection.doc(id).get()
    return routine.exists ? routine.data() : null
}

export const getRoutineFromCategory = category => {
    const routines = ref([])
    routinesCollection.where("category", "==", category).onSnapshot(snapshot => {
        routines.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    }) 
    //onUnmounted(close)
    return routines
}

export const getRoutines = () => {
    const routines = ref([])
    const close = routinesCollection.onSnapshot(snapshot => {
        routines.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    }) 
    onUnmounted(close)
    return routines
}

//Exercises
const exercisesCollection = db.collection('exercises')
const exercises = ref([])
    const close = exercisesCollection.onSnapshot(snapshot => {
        exercises.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    }) 
    onUnmounted(close)

export const createExercise = exercise => {
    return exercisesCollection.add(exercise)
}

export const deleteExercise = exerciseId => {
    return exercisesCollection.doc(exerciseId).delete()
}

export const getExercise = (id) => {
    return exercises.value.filter((ex) => {
        id = id.trim()
        // console.log(ex.id, '-', id, ex.id == id);
        return ex.id == id;
    })
}

export const getExerciseFromCategory = category => {
    return exercises.value.filter((ex) => {
        return ex.category == category;
      })
    //onUnmounted(close)
}

export const getExercises = () => {
    return exercises
}

export const getDayExercises = ids => {
    const returned = ref([]);
    ids.forEach((exercise) => {
    returned.value.push(getExercise(exercise));
});
    return returned.value
}

//Exercise Categories
const exerciseCategoriesCollection = db.collection('exerciseCategories')

export const getExerciseCategories = () => {
    const categories = ref([])
    const close = exerciseCategoriesCollection.onSnapshot(snapshot => {
        categories.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    }) 
    onUnmounted(close)
    return categories
}