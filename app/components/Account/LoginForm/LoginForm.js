import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

import Button from "../../Button/Button";
import Loading from "../../Loading/Loading";
import useValidation from "../../../hooks/useValidation";
import loginValidation, { loginDefaultData } from "../../../utils/validations/loginValidation";
import { styles } from "./styles";

export default function LoginForm() {

    const[showPass, setShowPass] = useState(false);
    const[loading, setLoading] = useState(false);

    const { formData, errors, handleChange, handleSubmit } = useValidation(loginDefaultData, loginValidation, onSubmit);

    const navigation = useNavigation();

    function onSubmit() {
        setLoading(true);
        firebase
            .auth().signInWithEmailAndPassword(formData.email, formData.pass)
            .then( () => {
                setLoading(false);
                navigation.navigate("account");
            })
            .catch( () => {
                setLoading(false);
        });
    }

    return (
        <View style={styles.formView}>
            <Input
                autoCapitalize="none"
                style={{ color: 'red'}}
                placeholder="Correo electrónico"
                containerStyle={ styles.inputContainer }
                inputStyle={ styles.input }
                onChange={ (e) => handleChange(e, 'email')}
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
                errorMessage={ errors.pass && errors.pass}
                errorStyle={styles.error}
            />
            <Button
                text="Iniciar sesión"
                type="btnMain"
                onPress={handleSubmit}
                buttonStyle={{ width: '95%', marginTop: 10}}
            />
            <Loading text="Iniciando sesión..." isVisible={loading} />
        </View>
    )
};