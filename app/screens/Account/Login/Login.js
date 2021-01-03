import React from 'react';
import { ScrollView, View, Image } from 'react-native';

import SocialLogin from "../../../components/Account/SocialLogin/SocialLogin";
import LoginForm from "../../../components/Account/LoginForm/LoginForm";
import TextCustom from "../../../components/TextCustom/TextCustom";
import { styles } from "./styles";

export default function Login() {
    return (
        <ScrollView
            centerContent={true}
            style={styles.scrollView}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        >
            <View>
                <View style={styles.imageView}>
                    <Image
                        source={ require('../../../../assets/img/logo-reverse.png') }
                        resizeMode="contain"
                        style={styles.logo}
                    />
                </View>
                <TextCustom textStyles={styles.title}>Accede</TextCustom>
                <LoginForm/>
                <SocialLogin/>
            </View>
        </ScrollView>
    )
};