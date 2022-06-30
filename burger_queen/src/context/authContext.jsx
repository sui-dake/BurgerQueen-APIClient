/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateCurrentUser,
} from "firebase/auth";
import { getDocs, collection, query, where } from "firebase/firestore";
import { auth, db } from "../libs/Firebase-config";

export const authContext = createContext();
//HOOK personalizado para no importar tanto de REACT
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No user");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [roles, setRoles] = useState("");

  const singup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  //podria ser borrando el auth???

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const changeName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const currentRemain = (user) => {
    updateCurrentUser(auth, user);
  };

  const role = async () => {
    const nameUser = [];
    const q = query(collection(db, "Users"), where("Email", "==", user.email));
    const snap = await getDocs(q);
    snap.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data().Name);
      nameUser.push(doc.data().Role);
      //console.log(nameUser);
    });
    setRoles(nameUser);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      //    console.log(currentUser.uid)
      //     console.log(user.email)
    });
    return () => unsuscribe();
  }, []);
  useEffect(() => {
    role();
  }, [user]);
  return (
    <authContext.Provider
      value={{
        singup,
        login,
        logout,
        user,
        loading,
        changeName,
        roles,
        currentRemain,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
