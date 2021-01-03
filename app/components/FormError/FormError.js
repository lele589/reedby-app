import React from 'react';
import { View } from 'react-native';

import TextCustom from "../TextCustom/TextCustom";
import { styles } from './styles'

export default function FormError({ text }) {
    return (
        <View>
            <TextCustom textStyles={styles.text}>{text}</TextCustom>
        </View>
    )
};