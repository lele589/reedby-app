import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { FirebaseContext } from "../../../config/firebase";

import { sendMailTo, getAppLink, onShare } from "../../../utils/share";
import Modal from "../../../components/Modal/Modal";
import TextCustom from "../../../components/TextCustom/TextCustom";
import { styles } from './styles';

export default function SettingsMenu() {

    const[showModal, setShowModal] = useState(false);
    const[renderModalText, setRenderModalText] = useState(false);
    const[errorMessage, setErrorMessage] = useState(null);

    const { firebase } = useContext(FirebaseContext);

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
                    setRenderModalText(<TextCustom>No se ha podido abrir la aplicación de correo electrónico del teléfono</TextCustom>);
                });
                break;
            case 'signOut':
                firebase.signOut();
                break;
            default:
                break;
        }
    };

    const menuItems = _generateMenu(_editItem);

    return (
        <View>
            <TextCustom textStyles={styles.mainTitle}>Ajustes</TextCustom>
            { menuItems.map((item, key) => (
                <ListItem
                    key={key}
                    chevron
                    onPress={item.onPress}
                >
                    <Icon type="simple-line-icon" name={item.leftIconName} color='#ccc'/>
                    <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            ))}
            { renderModalText && (
                <Modal isVisible={showModal} setIsVisible={setShowModal} errorMessage={errorMessage}>
                    {renderModalText}
                </Modal>
            )}
        </View>
    )
}

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