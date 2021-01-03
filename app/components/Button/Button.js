import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { Icon } from "react-native-elements";
import PropTypes from 'prop-types';

import TextCustom from "../TextCustom/TextCustom";
import { Colors } from "../../styles";
import { styles } from "./styles";

export default function Button({ text, type, buttonStyle, textStyle, onPress, iconName, iconType, iconStyle, loading }) {

    const[showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        setShowLoader(loading);
    }, [loading]);


    const textStyleType = type + 'Text';
    const iconStyleType = type + 'Icon';

    const _renderChildren = () => {
        let child;
        if(showLoader) {
            child = (<ActivityIndicator
                animating={showLoader}
                size="small"
                color={_getLoaderColor(type)}
            />)
        } else {
            child = (
                (iconName && iconType &&
                    <Icon
                        type={iconType}
                        name={iconName}
                        iconStyle={[styles.iconCommon, styles[iconStyleType], iconStyle]}
                    />),
                    <TextCustom textStyles={[styles[textStyleType], textStyle]}>
                        {text}
                    </TextCustom>
            );
        }
        return child;
    };

    return (
        <TouchableOpacity onPress={onPress}  style={[styles.btnCommon, type, buttonStyle]}>
            {_renderChildren()}
        </TouchableOpacity>
    )
};

const _getLoaderColor = (btnType) => {
    switch (btnType) {
        case 'btnSecondary':
            return Colors.green;
            break;
        default:
            return Colors.white;
            break;
    }
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    buttonStyle: PropTypes.object,
    textStyle: PropTypes.object,
    onPress: PropTypes.func.isRequired,
    iconName: PropTypes.string,
    iconType: PropTypes.string,
    iconStyle: PropTypes.object
};