import React, { useState, useEffect } from 'react';
import * as firebase from "firebase";

import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account() {

    const [login, setLogin] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( user => {
            !user ? setLogin(false) : setLogin(true);
        })
    }, [login]);

    return (
        login ? <UserLogged/> : <UserGuest/>
    )
};