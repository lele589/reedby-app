import React from "react";
import { View } from 'react-native';
import { Placeholder, PlaceholderLine, PlaceholderMedia, Fade } from 'rn-placeholder';

import BookListSeparator from "../../../components/Books/BooksList/BooklistSeparator/BooklistSeparator";
import { styles } from './styles';

export default function BookPlaceholder({ repeat = 1, animation, lineOneWidth, lineTwoWidth, lineThreeWidth }) {

    const items = [];

    for(let i = 1; i <= repeat; i++){

        items.push(
            <Placeholder
                key={'placeholder-' + i}
                Left={PlaceholderThumb}
                Animation={animation ? animation : Fade}
                style={styles.placeholder}
            >
                <PlaceholderLine width={lineOneWidth} />
                <PlaceholderLine width={lineTwoWidth} />
                <PlaceholderLine width={lineThreeWidth} />
            </Placeholder>
        )

        if (i < repeat) {
            items.push(
                <BookListSeparator key={'separator-' + i} styles={styles.separator} />
            )
        }
    }

    return (
        <View style={styles.container}>
            { items }
        </View>
    )
};

const PlaceholderThumb = () => {
    return(
        <PlaceholderMedia style={styles.placeholderMedia} />
    );
};