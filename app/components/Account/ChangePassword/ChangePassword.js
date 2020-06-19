import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { FirebaseContext } from "../../../config/firebase"

import useValidation from "../../../hooks/useValidation";
import changePassValidation, { changePassDefaultData } from "../../../utils/validations/changePassValidation";
import Button from '../../Button/Button';
import { styles } from "./styles";

export default function ChangePassword({ setShowModal }) {

    const[showPass, setShowPass] = useState(false);
    const[showNewPass, setShowNewPass] = useState(false);
    const[showRepeatNewPass, setShowRepeatNewPass] = useState(false);
    const[isLoading, setIsLoading] = useState(false);

    const { formData, errors, handleChange, handleSubmit } = useValidation(changePassDefaultData, changePassValidation, onSubmit);
    const { firebase } = useContext(FirebaseContext);

    function onSubmit() {
        setIsLoading(true);
        reauthenticate(formData.pass, formData.newPass);
    }

    async function reauthenticate(pass, newPass) {
        try {
            await firebase.reauthenticate(pass)
                .then(async () => {
                    await firebase.updatePass(newPass)
                    .then(() => {
                        setIsLoading(false);
                        setShowModal(false);
                        firebase.signOut();
                    })
                    .catch((error) => {
                        setIsLoading(false);
                        console.log(error)
                    })
            });
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    return (
        <View style={styles.view}>
            <Input
                placeholder="Contraseña actual"
                onChange={ (e) => handleChange(e, 'pass')}
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
                onChange={ (e) => handleChange(e, 'newPass')}
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
                onChange={ (e) => handleChange(e, 'repeatNewPass')}
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
                onPress={handleSubmit}
                loading={isLoading}
            />
        </View>
    )
};