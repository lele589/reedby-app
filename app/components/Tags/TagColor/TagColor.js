import React from 'react';
import { TouchableOpacity } from 'react-native';

import TextCustom from "../../TextCustom/TextCustom";
import { styles } from './styles';

export default function TagColor({ item, text, active }) {

    return (
        <TouchableOpacity style={[styles.subject, active && styles.subjectActive]}>
            <TextCustom textStyles={styles.subjectText}>{item ? item.translation : text}</TextCustom>
        </TouchableOpacity>
    )
};