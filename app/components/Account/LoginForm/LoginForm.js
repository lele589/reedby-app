import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../../config/firebase";

import useValidation from "../../../hooks/useValidation";
import loginValidation, { loginDefaultData } from "../../../utils/validations/loginValidation";
import Button from "../../Button/Button";
import FormError from "../../FormError/FormError";
import { styles } from "./styles";

export default function LoginForm() {

    const[showPass, setShowPass] = useState(false);
    const[loading, setLoading] = useState(false);
    const[errorMessage, setErrorMessage] = useState(null);

    const { formData, errors, handleChange, handleSubmit } = useValidation(loginDefaultData, loginValidation, onSubmit);
    const { firebase } = useContext(FirebaseContext);

    const navigation = useNavigation();

    function onSubmit() {
        setErrorMessage(null);
        setLoading(true);
        login(formData.email, formData.pass);
    }

    async function login(email, pass) {
        try {
            await firebase.userLogin(email, pass);
            setLoading(false);
            navigation.navigate("account");
        } catch {
            setLoading(false);
            setErrorMessage('Los datos de acceso no son correctos');
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
                        iconStyle={ styles.iconLeft}
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
            { errorMessage && <FormError text={errorMessage} />}
            <Button
                text="Iniciar sesión"
                type="btnMain"
                onPress={handleSubmit}
                buttonStyle={{ width: '95%', marginTop: 10}}
                loading={loading}
            />
        </View>
    )
};