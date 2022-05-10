//Logout and control of the login

import { auth } from "../bd/bd";
import {ref} from 'vue'
import { signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

export const isLogged = ref(false)
export const isAdmin = ref(false)
const provider = new GoogleAuthProvider();

auth.onAuthStateChanged(function (us) {
    if (us) {
      isLogged.value = true
      if (us.uid == "1Mr2czLc8Dhzz0t1GHqJO1zOJAz2" || us.uid == 'AK19FnvnYWPBiaQLwCw2jkwMrYf1') {
        isAdmin.value = true
      }
    }
    else {
      isAdmin.value = false
      isLogged.value = false
    }  
});

export const signWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = provider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log('Logued succesfully');
    location.href = "/"
  }).catch(error => {
    return console.error(error);
  })
  return true
}

export const logOut = () => {
    auth.signOut();
};

export const updateName = (name) => {
    auth.currentUser.updateProfile({displayName : name})
      .then(() => {
        // Profile updated!
        return true
      }).catch((error) => {
        // An error occurred
        return false
      });
}
export const updateMail = (email) => {
    auth.currentUser.updateEmail(email)
      .then(() => {
        // Profile updated!
        return true
      }).catch((error) => {
        // An error occurred
        return false
      })
}

export const adminId = "1Mr2czLc8Dhzz0t1GHqJO1zOJAz2"
  