import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles'

export default function FormError({ text }) {
    return (
        <View>
            <Text
                style={styles.text}
            >{text}</Text>
        </View>
    )
};