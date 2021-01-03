import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FirebaseContext } from "../../../config/firebase";

import { sendMailTo } from "../../../utils/share";
import { createNickName } from "../../../utils/user";
import Modal from "../../../components/Modal/Modal";
import ChangeDisplayName from "../../../components/Account/ChangeDisplayName/ChangeDisplayName";
import ChangePassword from "../../../components/Account/ChangePassword/ChangePassword";
import TextCustom from "../../../components/TextCustom/TextCustom";
import { styles } from './styles';

export default function AccountMenu({ setReloadUserInfo }) {

    const[showModal, setShowModal] = useState(false);
    const[renderModalText, setRenderModalText] = useState(false);
    const[errorMessage, setErrorMessage] = useState(false);

    const { user } = useContext(FirebaseContext);

    const _getItemTitle = (item) => {
        if(item.infoType === 'name') {
            return user.displayName || createNickName(user.email);
        } else if (item.infoType) {
            return user[item.infoType];
        } else {
            return item.title;
        }
    };

    const _editItem = (item) => {
        switch (item) {
            case 'name':
                setErrorMessage(null);
                setShowModal(true);
                setRenderModalText(<ChangeDisplayName
                    setShowModal={setShowModal}
                    setReloadUserInfo={setReloadUserInfo}
                />);
                break;
            case 'email':
                setErrorMessage(null);
                sendMailTo({
                    subject: 'Cambiar+correo+electronico',
                    body: `Correo electrónico actual: ${user.email} \n \n Nueva dirección de correo: \n`
                }).catch(() => {
                    setShowModal(true);
                    setErrorMessage(true);
                    setRenderModalText(<TextCustom>No se ha podido abrir la aplicación de correo electrónico del teléfono</TextCustom>);
                });
                break;
            case 'pass':
                setErrorMessage(null);
                setShowModal(true);
                setErrorMessage(null);
                setRenderModalText(<ChangePassword
                    setShowModal={setShowModal}
                />);
                break;
            default:
                break;
        }
    };

    const menuItems = _generateMenu(_editItem);

    return (
        <View style={styles.view}>
            <TextCustom textStyles={styles.mainTitle}>Cuenta</TextCustom>
            { menuItems.map((item, key) => (
                <ListItem
                    key={key}
                    title={_getItemTitle(item)}
                    subtitle={item.subtitle}
                    subtitleStyle={styles.subtitle}
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
            subtitle: 'Nombre de usuario',
            infoType: 'name',
            onPress: () => selectedItem('name'),
        },
        {
            subtitle: 'Para cambiar tu email contacta con Reedby',
            infoType: 'email',
            onPress: () => selectedItem('email')
        },
        {
            title: 'Contraseña',
            subtitle: 'Toca para cambiar la contraseña',
            onPress: () => selectedItem('pass')
        },
    ]
};