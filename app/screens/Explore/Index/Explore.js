import React from 'react';
import { View } from 'react-native';

import SubjectsList from "../../../components/Subjects/SubjectsList/SubjectsList";
import BooksList from "../../../components/Books/BooksList/BooksList";
import { styles } from "./styles";

export default function Explore() {

    return (
        <View style={styles.view}>
            <SubjectsList />
            <BooksList />
        </View>
    )
}