import React from "react";
import { Text, View } from 'react-native';

import BookPlaceholder from "../../Loaders/BookPlaceholder/BookPlaceholder";
import { styles } from './styles';

export default function SearchResults({ loading }) {

    return (
        <View style={styles.container}>
            { loading
                ?
                <BookPlaceholder
                    repeat={3}
                    lineOneWidth={70}
                    lineTwoWidth={50}
                    lineThreeWidth={30}
                />
                :
                <Text>Ya ha cargado</Text>
            }
        </View>
    )
};