import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import * as firebase from "firebase";

import Button from '../../Button/Button';
import { styles } from "./styles";

export default function ChangeDisplayName({ displayName, nickName, setShowModal, setReloadUserInfo }) {

    const[newDisplayName, setNewDisplayName ] = useState(null);
    const[error, setError ] = useState(null);
    const[isLoading, setIsLoading ] = useState(false);

    const _onSubmit = () => {
        setError(null);
        if(!newDisplayName) {
            setError('No se ha modificado el nombre actual');
        } else {
            setIsLoading(true);
            const update = { displayName: newDisplayName };
            firebase.auth().currentUser.updateProfile(update)
                .then(() => {
                    setIsLoading(false);
                    setReloadUserInfo(true);
                    setShowModal(false);
                })
                .catch(() => {
                    setError('Error al actualizar el nombre');
                    setIsLoading(false);
                })
        }
    };

    return (
        <View style={styles.view}>
            <Input
                placeholder="Nombre y apellidos"
                defaultValue={displayName || nickName}
                onChange={e => setNewDisplayName(e.nativeEvent.text)}
                leftIcon={
                    <Icon type="material-community" name="account-circle-outline" color='#ccc'/>
                }
                errorMessage={error}
            />
            <Button
                text="Guardar"
                type="btnMain"
                buttonStyle={{ width: '90%', marginTop: 10 }}
                onPress={_onSubmit}
                loading={isLoading}
            />
        </View>
    )
};