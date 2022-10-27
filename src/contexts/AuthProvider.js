import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const user = { displayName: "anis" };
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const gitLogIn = () => {
    return signInWithPopup(auth, gitProvider);
  };

  const authInfo = { user, createUser, LogIn, googleLogin, gitLogIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
