import React from 'react';
import { View } from 'react-native';
import { SocialIcon } from "react-native-elements";

import TextCustom from "../../TextCustom/TextCustom";
import { styles } from './styles'

export default function SocialLogin() {
    return (
        <View>
            <TextCustom textStyles={styles.text}>O tambien puedes acceder con:</TextCustom>
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