import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { FirebaseContext } from "../../../config/firebase";

import useValidation from "../../../hooks/useValidation";
import registerValidation, { registerDefaultData } from "../../../utils/validations/registerValidation";
import FormError from "../../FormError/FormError";
import Button from "../../Button/Button";
import { styles } from './styles';

export default function RegisterForm() {

    const[showPass, setShowPass] = useState(false);
    const[showRepeatPass, setShowRepeatPass] = useState(false);
    const[loading, setLoading] = useState(false);
    const[errorMessage, setErrorMessage] = useState(null);

    const { formData, errors, handleChange, handleSubmit } = useValidation(registerDefaultData, registerValidation, onSubmit);
    const { firebase } = useContext(FirebaseContext);

    const navigation = useNavigation();

    function onSubmit() {
        setErrorMessage(null);
        setLoading(true);
        register(formData.email, formData.pass);
    }

    async function register(email, pass) {
        try {
            await firebase.userRegister(email, pass);
            setLoading(false);
            navigation.navigate("account");
        } catch {
            setLoading(false);
            setErrorMessage('El email ya está en uso');
        }
    }

    return (
        <View style={styles.formView}>
            <Input
                autoCapitalize="none"
                placeholder="Correo electrónico"
                containerStyle={ styles.inputContainer }
                inputStyle={ styles.input }
                onChange={ (e) => handleChange(e, 'email')}
                clearButtonMode="always"
                importantForAutofill="auto"
                keyboardType="email-address"
                placeholderTextColor={ styles.placeholder.color }
                textContentType="emailAddress"
                leftIcon={
                    <Icon
                        type="material-community"
                        name="email-outline"
                        iconStyle={ styles.iconLeft }
                    />
                }
                errorMessage={ errors.email && errors.email }
                errorStyle={ styles.error }
            />
            <Input
                placeholder="Contraseña"
                containerStyle={ styles.inputContainer }
                inputStyle={ styles.input }
                onChange={ (e) => handleChange(e, 'pass')}
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
                errorMessage={ errors.pass && errors.pass}
                errorStyle={styles.error}
            />
            <Input
                placeholder="Repetir contraseña"
                containerStyle={ styles.inputContainer }
                inputStyle={ styles.input }
                onChange={ (e) => handleChange(e, 'repeatPass')}
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
                errorMessage={ errors.repeatPass && errors.repeatPass}
                errorStyle={styles.error}
            />
            { errorMessage && <FormError text={errorMessage} />}
            <Button
                text="Crear cuenta"
                type="btnMain"
                onPress={handleSubmit}
                buttonStyle={{ width: '95%', marginTop: 10}}
                loading={loading}
            />
        </View>
    )
};