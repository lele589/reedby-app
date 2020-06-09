import React from 'react';
import { View, Text } from 'react-native';

export default function TextCustom({ family, weight, children, textStyles, ellipsizeMode, numberOfLines }) {

    const font = {
      light: 'Jost_300Light',
      regular: 'Jost_400Regular',
      bold: 'Jost_500Medium'
    };

    let fontFamily = '';
    switch (weight) {
        case "light":
            fontFamily = font.light;
            break;
        case "bold":
            fontFamily = font.bold;
            break;
        default:
            fontFamily = font.regular;
            break;
    }

    return (
        <View>
            <Text
                numberOfLines={numberOfLines}
                style={[textStyles, {fontFamily: family ? family : fontFamily}]}
                {...(ellipsizeMode ? {ellipsizeMode: {ellipsizeMode}} : 'tail')}
            >{children}</Text>
        </View>
    )
};