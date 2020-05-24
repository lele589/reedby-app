import React from 'react';
import { Image, View, Text } from "react-native";
import { Overlay } from 'react-native-elements'
import PropTypes from 'prop-types';

import { styles } from "./styles";

export default function Modal({ isVisible, setIsVisible, children, errorMessage }) {

    const _closeModal = () => setIsVisible(false);

    const _renderChildren = () => {
        let child;
        if(errorMessage) {
            child = (
                <View>
                    <View style={styles.errorIconContainer}>
                        <Image
                            source={ require('../../../assets/img/error.png') }
                            resizeMode="contain"
                            style={styles.errorIcon}
                        />
                        <Text style={styles.errorTitle}>
                            Error
                        </Text>
                    </View>
                    <View style={[styles.errorMessageContainer]}>
                        <Text style={styles.errorText}>
                            {children}
                        </Text>
                    </View>
                </View>)
        } else {
            child = children;
        }
        return child;
    };

    return (
        <Overlay
            isVisible={isVisible}
            backdropStyle={styles.backdropStyle}
            overlayStyle={errorMessage ? styles.overlayErrorStyles : styles.overlayStyles}
            onBackdropPress={_closeModal}
        >
            {_renderChildren()}
        </Overlay>
    )
};

Modal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    setIsVisible: PropTypes.func,
    children: PropTypes.object.isRequired,
    errorMessage: PropTypes.bool,
};