import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { size, isEmpty } from 'lodash';
import firebase from "firebase";

import Button from "../../Button/Button";
import { validateEmail } from "../../../utils/formValidations";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../Loading/Loading";
import FormError from "../../FormError/FormError";

export default function LoginForm() {

    const[formData, setFormData] = useState(defaultFormData);
    const[showPass, setShowPass] = useState(false);
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
        } else if (size(formData.pass) < 6) {
            setError(true);
            setErrorMessage('La contraseña debe tener mínimo 6 caracteres');
        } else {
            setError(false);
            setLoading(true);
            firebase
                .auth().signInWithEmailAndPassword(formData.email, formData.pass)
                .then( () => {
                    setLoading(false);
                    navigation.navigate("account");
                })
                .catch( () => {
                    setLoading(false);
                    setError(true);
                    setErrorMessage('Email o contraseña incorrecta');
                });
        }
    };

    return (
        <View style={styles.formView}>
            <Input
                autoCapitalize="none"
                style={{ color: 'red'}}
                placeholder="Correo electrónico"
                containerStyle={ styles.inputContainer }
                inputStyle={ styles.input }
                onChange={ (e) => _onChange(e, 'email')}
                clearButtonMode="always"
                importantForAutofill="auto"
                keyboardType="email-address"
                placeholderTextColor="#666"
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
                placeholderTextColor="#666"
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
            { error && <FormError text={errorMessage} />}
            <Button
                text="Iniciar sesión"
                type="btnMain"
                onPress={_onSubmit}
                buttonStyle={{ width: '95%', marginTop: 10}}
            />
            <Loading text="Iniciando sesión..." isVisible={loading} />
        </View>
    )
};

const defaultFormData = {
    email: '',
    pass: ''
};