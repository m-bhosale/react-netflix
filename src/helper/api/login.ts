import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, UserCredential } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
const auth = firebaseAuth;
// const auth = getAuth(); // Create the auth object
export const createUserWithEmail = (email: string, password: string ,userName:string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      // Signed in
      const user = userCredential.user;
      OnUpdateProfile(auth, userName)
      console.log("Successfully created user:", user);
      return user; // Return the user if needed
    })
    .catch((error: any) => {
      console.error('Signup error:', error);
      throw error; // Rethrow the error if needed
    });
};
export const OnUpdateProfile = (auth, user) => {
  return updateProfile(auth.currentUser, {
    displayName: user, photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    console.error('update profile error:', error);
    throw error;
    // An error occurred
    // ...
  });
}

export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Successfully signed user:", user);
      // ...
    })
    .catch((error) => {
      throw error;
      console.error('sign in err error:', error);
    });
}


export const OnSignOut = () => {
  return signOut(auth).then(() => {
    console.log('Sign-out successful')
  }).catch((error) => {
    throw error;
  });
}