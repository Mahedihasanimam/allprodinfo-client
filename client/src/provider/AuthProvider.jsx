import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../pages/firebase.config";



export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {

    const [user,setuser]=useState([])
    const [loder,setLoder]=useState(true)
    const googleProvider=new GoogleAuthProvider()
   
    //user create 
    const createUser=(email,password)=>{
        setLoder(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
    //login
    const login=(email,password)=>{
        setLoder(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google login 
    const googleLogin=()=>{
        setLoder(true)
       return signInWithPopup(auth,googleProvider)
    }
    // logout
    const logout=()=>{
        setLoder(true)
        signOut(auth)
    }
    // ovjarvar 
    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,user=>{
            setuser(user)
            setLoder(false)
        })
        return()=>{
            unsubcribe()
        }
    },[])
    const authinfo={createUser,login,user,setuser,logout,googleLogin,loder}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;