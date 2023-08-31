import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase";
const auth = firebaseAuth;
// const auth = getAuth(); // Create the auth object

export const createUserWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Successfully created user:", user);
      return user; // Return the user if needed
    })
    .catch((error: any) => {
      console.error('Signup error:', error);
      throw error; // Rethrow the error if needed
    });
};
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

// export default createUserWithEmail;
