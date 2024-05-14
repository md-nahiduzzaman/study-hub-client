import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";
import axios from "axios";

export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user with email & pass
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update user profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logout = async () => {
    setLoading(true);
    // setUser(null);
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
    console.log(data);
    // setUser(null);
    toast.success("Successfully Logout!");
    return signOut(auth);
  };

  //google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //github login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("CurrentUser:", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //     console.log("user---", user);
  //     // if (user) {
  //     //   setUser(user);
  //     // }
  //     setLoading(false);
  //   });
  //   return () => unsubscribe();
  // }, []);

  console.log(user);

  const allValues = {
    createUser,
    signInUser,
    user,
    setUser,
    logout,
    updateUserProfile,
    googleLogin,
    githubLogin,
    loading,
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
