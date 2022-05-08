//Logout and control of the login

import { auth } from "../bd/bd";
import {ref} from 'vue'

export const isLogged = ref(false)
export const isAdmin = ref(false)

auth.onAuthStateChanged(function (us) {
    if (us) {
      isLogged.value = true
      if (us.uid == "1Mr2czLc8Dhzz0t1GHqJO1zOJAz2") {
        isAdmin.value = true
      }
    }
    else {
      isAdmin.value = false
      isLogged.value = false
    }  
});

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
  