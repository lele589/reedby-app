import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { size } from 'lodash';
import * as firebase from "firebase";

import Button from '../../Button/Button';
import { reauthenticate } from "../../../utils/api";
import { styles } from "./styles";

export default function ChangePassword({ setShowModal }) {

    const[formData, setFormData] = useState(defaultFormData());
    const[showPass, setShowPass] = useState(false);
    const[showNewPass, setShowNewPass] = useState(false);
    const[showRepeatNewPass, setShowRepeatNewPass] = useState(false);
    const[errors, setErrors] = useState({});
    const[isLoading, setIsLoading] = useState(false);

    const _onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text});
    };

    const _onSubmit = async () => {
        let isSetErrors = true;
        let errorsTemp = {};
        setErrors({});
        if(!formData.pass || !formData.newPass || !formData.repeatNewPass) {
            errorsTemp = {
                pass: !formData.pass ? 'Este campo es obligatorio' : '',
                newPass: !formData.newPass ? 'Este campo es obligatorio' : '',
                repeatNewPass: !formData.repeatNewPass ? 'Este campo es obligatorio' : ''
            };
        } else if (formData.newPass !== formData.repeatNewPass) {
            errorsTemp = {
                newPass: 'Las contraseñas no son iguales',
                repeatNewPass: 'Las contraseñas no son iguales'
            };
        } else if (size(formData.newPass) < 6) {
            errorsTemp = {
                newPass: 'La contraseña debe tener más de 6 caracteres',
            };
        } else {
            setIsLoading(true);
            await reauthenticate(formData.pass)
                .then(async () => {
                    await firebase.auth().currentUser.updatePassword(formData.newPass)
                        .then(() => {
                            isSetErrors = false;
                            setIsLoading(false);
                            setShowModal(false);
                            firebase.auth().signOut();
                        })
                        .catch(() => {
                            errorsTemp = {
                                other: 'Error al actualizar la contraseña',
                            };
                            setIsLoading(false);
                        })
                }).catch(() => {
                    setIsLoading(false);
                    errorsTemp = {
                        pass: 'La contraseña no es correcta',
                    };
                });
        }
        isSetErrors && setErrors(errorsTemp);
    };

    return (
        <View style={styles.view}>
            <Input
                placeholder="Contraseña actual"
                onChange={ (e) => _onChange(e, 'pass')}
                password={true}
                secureTextEntry={!showPass}
                clearButtonMode="always"
                importantForAutofill="auto"
                placeholderTextColor={ styles.placeholder.color }
                textContentType="password"
                errorMessage={errors.pass}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="lock-outline"
                        iconStyle={ styles.iconLeft}
                    />
                }
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPass ? "eye-off-outline" : "eye-outline"}
                        iconStyle={ styles.iconRight }
                        onPress={() => setShowPass(!showPass)}
                    />
                }
            />
            <Input
                placeholder="Nueva contraseña"
                onChange={ (e) => _onChange(e, 'newPass')}
                password={true}
                secureTextEntry={!showNewPass}
                clearButtonMode="always"
                placeholderTextColor={ styles.placeholder.color }
                textContentType="password"
                errorMessage={errors.newPass}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="lock-outline"
                        iconStyle={ styles.iconLeft}
                    />
                }
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showNewPass ? "eye-off-outline" : "eye-outline"}
                        iconStyle={ styles.iconRight }
                        onPress={() => setShowNewPass(!showNewPass)}
                    />
                }
            />
            <Input
                placeholder="Repetir contraseña"
                onChange={ (e) => _onChange(e, 'repeatNewPass')}
                password={true}
                secureTextEntry={!showRepeatNewPass}
                clearButtonMode="always"
                placeholderTextColor={ styles.placeholder.color }
                textContentType="password"
                errorMessage={errors.repeatNewPass}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="lock-outline"
                        iconStyle={ styles.iconLeft}
                    />
                }
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showRepeatNewPass ? "eye-off-outline" : "eye-outline"}
                        iconStyle={ styles.iconRight }
                        onPress={() => setShowRepeatNewPass(!showRepeatNewPass)}
                    />
                }
            />
            <Button
                id="submitChangePassword"
                text="Guardar"
                type="btnMain"
                buttonStyle={{ width: '90%', marginTop: 10 }}
                onPress={_onSubmit}
                loading={isLoading}
            />
        </View>
    )
};

const defaultFormData = () => {
    return {
        pass: '',
        newPass: '',
        repeatNewPass: ''
    }
};