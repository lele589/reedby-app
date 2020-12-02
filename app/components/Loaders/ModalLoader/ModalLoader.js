import React from "react";
import { View, Text, ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';

import { styles } from './styles';

export default function ModalLoader({ isVisible, text }) {
    return (
        <Overlay
            isVisible={ isVisible }
            windowBackgroundColor="rgba(0, 0, 0, 0.3)"
            overlayBackgroundColor="transparent"
            overlayStyle={ styles.overlay }
        >
            <View style={ styles.view }>
                <ActivityIndicator
                    size="large"
                    color="00a680"
                />
                { text && <Text style={ styles.text }>{ text }</Text> }
            </View>
        </Overlay>
    )
};