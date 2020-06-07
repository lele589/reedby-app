import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as firebase from "firebase";

import { styles } from './styles';
import { sendMailTo, getAppLink, onShare } from "../../../utils/api";
import Modal from "../../../components/Modal/Modal";

export default function SettingsMenu({ user }) {

    const[showModal, setShowModal] = useState(false);
    const[renderModalText, setRenderModalText] = useState(false);
    const[errorMessage, setErrorMessage] = useState(null);

    const shareAppOptions = {
        title: 'App link',
        message: `Instala esta app y crea tu biblioteca online: ${getAppLink()}`,
        url: getAppLink()
    };

    const _editItem = (item) => {
        switch (item) {
            case 'share': //TODO: revisar promesa
                onShare(shareAppOptions);
                break;
            case 'help':
                setErrorMessage(null);
                sendMailTo({
                    subject: 'Ayuda',
                    body: ''
                }).catch(() => {
                    setShowModal(true);
                    setErrorMessage(true);
                    setRenderModalText(<Text>No se ha podido abrir la aplicación de correo electrónico del teléfono</Text>);
                });
                break;
            case 'signOut':
                firebase.auth().signOut();
                break;
            default:
                break;
        }
    };

    const menuItems = _generateMenu(_editItem);

    return (
        <View>
            <Text style={styles.mainTitle}>Ajustes</Text>
            { menuItems.map((item, key) => (
                <ListItem
                    key={key}
                    title={item.title}
                    leftIcon={{ name: item.leftIconName, type: 'simple-line-icon', color: '#ccc' }}
                    chevron
                    onPress={item.onPress}
                />
            ))}
            { renderModalText && (
                <Modal isVisible={showModal} setIsVisible={setShowModal} errorMessage={errorMessage}>
                    {renderModalText}
                </Modal>
            )}
        </View>
    )
};

const _generateMenu = (selectedItem) => {
    return [
        {
            title: 'Compartir',
            leftIconName: 'share',
            onPress: () => selectedItem('share')
        },
        {
            title: 'Ayuda',
            leftIconName: 'question',
            onPress: () => selectedItem('help')
        },
        {
            title: 'Cerrar sesión',
            leftIconName: 'logout',
            onPress: () => selectedItem('signOut')
        },
    ]
};