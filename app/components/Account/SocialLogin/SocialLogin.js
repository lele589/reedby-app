import React from 'react';
import { View, Text } from 'react-native';
import { SocialIcon } from "react-native-elements";

import { styles } from './styles'

export default function SocialLogin() {
    return (
        <View>
            <Text style={styles.text}>O tambien puedes acceder con:</Text>
            <View style={styles.btnsView}>
                <SocialIcon
                    title='Facebook'
                    button
                    type='facebook'
                    style={styles.btnCommon}
                    iconSize={19}
                    fontStyle={{ fontSize: 16, fontWeight: '400' }}
                />
                <SocialIcon
                    title='Google'
                    button
                    type='google'
                    style={styles.btnCommon}
                    iconSize={19}
                    fontStyle={{ fontSize: 17, fontWeight: '400' }}
                />
            </View>
    </View>
    )
};