import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default function Tag({ tagTitle, onPress, tagStyles, tagTextStyles }) {

    return (
        tagTitle
            &&
            (<TouchableOpacity
                onPress={onPress}
                style={[styles.tag, tagStyles]}
            >
                <Text style={[styles.tagText, tagTextStyles]}>{tagTitle}</Text>
            </TouchableOpacity>)
    )
};