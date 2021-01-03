import React from "react";
import { View, TouchableOpacity } from "react-native";

import TextCustom from "../TextCustom/TextCustom";
import { styles } from "./styles";

export default function Header({ children, viewStyles, textStyles, weight, moreLink, moreOnPress, moreStyles }) {
    return (
        <View style={[styles.view, viewStyles]}>
            <TextCustom weight={weight ? weight : 'regular'} textStyles={[styles.title, textStyles]}>{children}</TextCustom>
            {moreLink && (
                <TouchableOpacity style={styles.moreTextView} onPress={moreOnPress}>
                    <TextCustom textStyles={[styles.moreText, moreStyles]}>Ver más</TextCustom>
                </TouchableOpacity>
            )}
        </View>
    )
};