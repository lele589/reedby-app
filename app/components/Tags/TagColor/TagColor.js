import React from 'react';
import { TouchableOpacity } from 'react-native';

import TextCustom from "../../TextCustom/TextCustom";
import { styles } from './styles';

export default function TagColor({ item, text, active, overflow, stylesContainer }) {

    return (
        <TouchableOpacity style={[styles.subject, active && styles.subjectActive, overflow && styles.overflow, stylesContainer]}>
            <TextCustom textStyles={[styles.subjectText, overflow && styles.overflowText]}>{item ? item.translation : text}</TextCustom>
        </TouchableOpacity>
    )
};