import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export default function TagColor({ item, text, active }) {

    return (
        <TouchableOpacity style={[styles.subject, active && styles.subjectActive]}>
            <Text style={styles.subjectText}>{item ? item.translation : text}</Text>
        </TouchableOpacity>
    )
};