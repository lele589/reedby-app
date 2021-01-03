import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';
import TextCustom from "../../TextCustom/TextCustom";

export default function Tag({ tagTitle, onPress, tagStyles, tagTextStyles }) {

    return (
        tagTitle
            &&
            (<TouchableOpacity
                onPress={onPress}
                style={[styles.tag, tagStyles]}
            >
                <TextCustom textStyles={[styles.tagText, tagTextStyles]}>{tagTitle}</TextCustom>
            </TouchableOpacity>)
    )
};