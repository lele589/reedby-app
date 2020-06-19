import React, { useState, useEffect } from 'react';
import firebase from "../config/firebase";

export default function useAuthentication() {

    const[userLogged, setUserLogged] = useState(null);

    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if(user) {
                setUserLogged(user);
            } else {
                setUserLogged(null);
            }
        });
        return () => unsubscribe();
    }, []); //No hay nada en deps, se ejecuta una vez

    return userLogged;
}