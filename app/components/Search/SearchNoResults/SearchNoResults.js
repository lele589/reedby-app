import React from 'react';
import { Image, View } from "react-native";

import { styles } from "./styles";
import TextCustom from "../../TextCustom/TextCustom";

export default function SearchNoResults() {

    return (
        <View style={styles.view}>
            <Image
                source={ require('../../../../assets/img/no-results.png') }
                resizeMode="contain"
                style={styles.noResultsImage}
            />
            <TextCustom textStyles={styles.text} children='No hay resultados' />
        </View>
    )
};