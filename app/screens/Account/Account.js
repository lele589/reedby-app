import React, { useContext } from 'react';
import { FirebaseContext } from "../../config/firebase"

import UserGuest from "./UserGuest/UserGuest";
import UserLogged from "./UserLogged/UserLogged";

export default function Account() {

    const { user } = useContext(FirebaseContext);

    return (
        user ? <UserLogged/> : <UserGuest/>
    )
};