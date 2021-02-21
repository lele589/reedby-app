import React from 'react';
import { ScrollView, View, Image } from 'react-native';

import SocialLogin from "../../../components/Account/SocialLogin/SocialLogin";
import RegisterForm from "../../../components/Account/RegisterForm/RegisterForm";
import TextCustom from "../../../components/TextCustom/TextCustom";
import { styles } from './styles'

export default function Register() {
    return (
        <ScrollView
            centerContent={true}
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
                <TextCustom textStyles={styles.title}>Nueva cuenta</TextCustom>
                <RegisterForm/>
                <SocialLogin/>
            </View>
        </ScrollView>
    )
};