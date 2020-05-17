import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import { size, isEmpty } from 'lodash';
import firebase from "firebase";

import Button from "../../Button/Button";
import FormError from "../../FormError/FormError";
import Loading from "../../Loading/Loading";
import { validateEmail } from "../../../utils/formValidations";
import { styles } from './styles';

export default function LoginForm() {

    const[formData, setFormData] = useState(defaultFormData);
    const[showPass, setShowPass] = useState(false);
    const[showRepeatPass, setShowRepeatPass] = useState(false);
    const[error, setError] = useState(false);
    const[errorMessage, setErrorMessage] = useState('');
    const[loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const _onChange = (e, type) => {
        setFormData({
            ...formData,
            [type]: e.nativeEvent.text
        })
    };

    const _onSubmit = () => {
        if ( isEmpty(formData.email) || isEmpty(formData.pass) ) {
            setError(true);
            setErrorMessage('Todos los campos son obligatorios');
        } else if (!validateEmail(formData.email)) {
            setError(true);
            setErrorMessage('El email no tiene un formato correcto');
        } else if (formData.pass !== formData.repeatPass) {
            setError(true);
            setErrorMessage('Las contraseñas tienen que ser iguales');
        } else if (size(formData.pass) < 6) {
            setError(true);
            setErrorMessage('La contraseña debe tener mínimo 6 caracteres');
        } else {
            setError(false);
            setErrorMessage('');
            firebase
                .auth().createUserWithEmailAndPassword(formData.email, formData.pass)
                .then( response => {
                    setLoading(false); // Antes de la navegación!! sino estamos cambiando el estado a un componente desmontado (al cambiar de ruta se desmonta)
                    navigation.navigate("account");
                })
                .catch( () => {
                    setLoading(true);
                    setError(true);
                    setErrorMessage('El email ya está en uso');
                })
        }
    };

    return (
        <View style={styles.formView}>
            <Input
                autoCapitalize="none"
                placeholder="Correo electrónico"
                containerStyle={ styles.inputContainer }
                inputStyle={ styles.input }
                onChange={ (e) => _onChange(e, 'email')}
                clearButtonMode="always"
                importantForAutofill="auto"
                keyboardType="email-address"
                placeholderTextColor={ styles.placeholder.color }
                textContentType="emailAddress"
                leftIcon={
                    <Icon
                        type="material-community"
                        name="email-outline"
                        iconStyle={ styles.iconLeft}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                containerStyle={ styles.inputContainer }
                inputStyle={ styles.input }
                onChange={ (e) => _onChange(e, 'pass')}
                password={true}
                secureTextEntry={!showPass}
                clearButtonMode="always"
                importantForAutofill="auto"
                placeholderTextColor={ styles.placeholder.color }
                textContentType="password"
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
                placeholder="Repetir contraseña"
                containerStyle={ styles.inputContainer }
                inputStyle={ styles.input }
                onChange={ (e) => _onChange(e, 'repeatPass')}
                password={true}
                secureTextEntry={!showRepeatPass}
                clearButtonMode="always"
                placeholderTextColor={ styles.placeholder.color }
                textContentType="password"
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
                        name={showRepeatPass ? "eye-off-outline" : "eye-outline"}
                        iconStyle={ styles.iconRight }
                        onPress={() => setShowRepeatPass(!showRepeatPass)}
                    />
                }
            />
            { error && <FormError text={errorMessage} />}
            <Button
                text="Crear cuenta"
                type="btnMain"
                onPress={_onSubmit}
                buttonStyle={{ width: '95%', marginTop: 10}}
            />
            <Loading text="Creando cuenta..." isVisible={loading} />
        </View>
    )
};

const defaultFormData = {
    email: '',
    pass: '',
    repeatPass: ''
};