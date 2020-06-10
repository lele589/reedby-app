import React from "react";
import { View, TouchableOpacity } from "react-native";

import TextCustom from "../TextCustom/TextCustom";
import { styles } from "./styles";

export default function Header({ children, viewStyles, textStyles, moreLink, moreOnPress, moreStyles }) {
    return (
        <View style={[styles.view, styles[viewStyles]]}>
            <TextCustom textStyles={[styles.title, styles[textStyles]]}>{children}</TextCustom>
            {moreLink && (
                <TouchableOpacity style={styles.moreTextView} onPress={moreOnPress}>
                    <TextCustom textStyles={[styles.moreText, styles[moreStyles]]}>Ver más</TextCustom>
                </TouchableOpacity>
            )}
        </View>
    )
};