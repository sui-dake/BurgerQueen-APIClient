import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut, updateProfile,
} from "firebase/auth";
import {
    getDocs,
    getDoc,
    collection,
    doc,
    docs,
    query,
    where,
  } from "firebase/firestore";
import { auth, db } from "../libs/Firebase-config";

export const authContext = createContext();
//HOOK personalizado para no importar tanto de REACT
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No hay usuario");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const singup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const changeName = (name)=> {
      updateProfile(auth.currentUser, {
    displayName: name
  })}

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      //    console.log(currentUser.uid)
      //     console.log(user.email)
    });
    return () => unsuscribe();
  }, []);
  return (
    <authContext.Provider value={{ singup, login, logout, user, loading, changeName }}>
      {children}
    </authContext.Provider>
  );
}
