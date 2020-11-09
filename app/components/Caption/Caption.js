import React from 'react';
import { View } from 'react-native';

import TextCustom from "../../components/TextCustom/TextCustom";
import { styles } from "./styles";

export default function Caption({ title, description, customStyles }) {

    return (
        <View style={[styles.view, customStyles]}>
            {title &&
                <TextCustom
                    weight="bold"
                    numberOfLines={1}
                    textStyles={styles.title}>
                    {title}
                </TextCustom>
            }
            <TextCustom
                textStyles={styles.description}>
                {description}
            </TextCustom>
        </View>
    )
};