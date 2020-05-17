import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import SocialLogin from "../../../components/Account/SocialLogin/SocialLogin";
import RegisterForm from "../../../components/Account/RegisterForm/RegisterForm";
import { styles } from './styles'

export default function Register() {
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
                <Text style={styles.title}>Nueva cuenta</Text>
                <RegisterForm/>
                <SocialLogin/>
            </View>
        </ScrollView>
    )
};