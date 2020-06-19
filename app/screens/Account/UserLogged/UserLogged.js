import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { FirebaseContext } from "../../../config/firebase";

import UserInfo from "../UserInfo/UserInfo";
import AccountMenu from "../AccountMenu/AccountMenu";
import SettingsMenu from "../SettingsMenu/SettingsMenu";

import { styles } from "./styles";

export default function UserLogged() {

    const[userData, setUserData] = useState(null);
    const[reloadUserInfo, setReloadUserInfo] = useState(false);

    const { user } = useContext(FirebaseContext);

    useEffect(() => {
        (async () => {
            setUserData(user);
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
            {userData && <UserInfo setReloadUserInfo={setReloadUserInfo}/> }
            {userData && <AccountMenu setReloadUserInfo={setReloadUserInfo}/> }
            <SettingsMenu />
        </ScrollView>
    )
};