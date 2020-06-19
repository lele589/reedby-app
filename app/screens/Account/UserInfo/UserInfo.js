import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { FirebaseContext } from "../../../config/firebase";

import { createNickName } from "../../../utils/user";
import defaultAvatar from '../../../../assets/img/avatar.png';
import Loading from "../../../components/Loading/Loading";
import { styles } from './styles';

export default function UserInfo() {

    const[loading, setLoading] = useState(false);

    const { user, firebase } = useContext(FirebaseContext);

    const _editAvatar = async () => {
        const resultPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const resultPermissionCamera = resultPermission.permissions.cameraRoll.status;
        if (resultPermissionCamera === 'denied') {
            console.log('Es necesario aceptar los permisos de la galería');
        } else {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaType: 'Images',
                allowsEditing: true,
                aspect: [4, 3]
            });
            if (!result.cancelled) {
                _manipulateAvatar(result);
            }
        }
    };

    const _uploadAvatarToFirebase = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const ref = firebase.storage.ref().child(`avatar/${user.uid}`);
        return ref.put(blob)
            .then(() => {
                _updateAvatarUrl();
            })
            .catch(() => {
                console.log("Error al actualizar el avatar");
            })
    };

    const _updateAvatarUrl = () => {
        setLoading(true);
        firebase.storage.ref(`avatar/${user.uid}`).getDownloadURL()
            .then(async (response) => {
                const update = { photoURL: response};
                await firebase.updateProfile(update);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                console.log("Error al recargar el avatar");
            })
    };

    const _manipulateAvatar = async (image) => {
        const manipImage = await ImageManipulator.manipulateAsync(
            image.uri,
            [{ resize: { width: 100} }]
        );
        _uploadAvatarToFirebase(manipImage.uri);
    };

    return (
        <View style={styles.view}>
            <Avatar
                containerStyle={styles.avatarContainer}
                rounded
                size="large"
                source={user.photoURL ? { uri: user.photoURL} : defaultAvatar}
                showAccessory
                onAccessoryPress={_editAvatar}
            />
            <View>
                <Text style={styles.name}>{user.displayName || createNickName(user.email)}</Text>
                <Text style={styles.bookshelf}>Colección de 45 libros (25 leídos)</Text>
            </View>
            <Loading isVisible={loading} text="Actualizando avatar..." />
        </View>
    )
};