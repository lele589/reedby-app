import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import UserInfo from "../UserInfo/UserInfo";
import AccountMenu from "../AccountMenu/AccountMenu";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import * as firebase from "firebase";

import { styles } from "./styles";
import { createNickName } from "../../../utils/api";

export default function UserLogged() {

    const[userData, setUserData] = useState(null);
    const[nickName, setNickName] = useState(null);
    const[reloadUserInfo, setReloadUserInfo] = useState(false);

    useEffect(() => {
        (async () => {
            const user = await firebase.auth().currentUser;
            setUserData(user);
            setNickName(createNickName(user.email));
        })();
        setReloadUserInfo(false);
    }, [reloadUserInfo]);

    return (
        <ScrollView
            contentContainerStyle={styles.contentContainer}
            alwaysBounceVertical={true}
            automaticallyAdjustContentInsets={true}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
        >
            {userData && <UserInfo user={userData} nickName={nickName} setReloadUserInfo={setReloadUserInfo}/> }
            {userData && <AccountMenu user={userData} nickName={nickName} setReloadUserInfo={setReloadUserInfo}/> }
            <SettingsMenu user={userData}/>
        </ScrollView>
    )
};