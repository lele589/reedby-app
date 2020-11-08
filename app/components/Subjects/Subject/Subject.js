import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from "react-native-elements";

import { styles } from './styles';
import { getSubjectCover } from "../../../utils/books";

export default function BookCategories({ item }) {

    const[subjectImage, setSubjectImage]= useState(null);

    useEffect(() => {
        getSubjectCover(setSubjectImage, item.query);
    }, []);

    return (
        <View style={styles.subjectView}>
            <View style={styles.subjectAvatar}>
                <Avatar
                    rounded
                    size="large"
                    source={subjectImage && subjectImage ? {uri: subjectImage} : null}
                />
            </View>
            <Text style={styles.subjectText}>{item.translation}</Text>
        </View>
    )
};