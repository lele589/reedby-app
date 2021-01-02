import React, { useState } from 'react';
import { Image, View, Animated } from 'react-native';
import { SearchBar } from "react-native-elements";

import SubjectsList from "../../../components/Subjects/SubjectsList/SubjectsList";
import BooksList from "../../../components/Books/BooksList/BooksList";
import SearchResults from "../../../components/Search/SearchResults/SearchResults";
import Header from "../../../components/Header/Header";
import { styles } from "./styles";

export default function Explore() {

    const [search, setSearch] = useState('');

    const HEADER_MAX_HEIGHT = 80;// set the initial height
    const HEADER_MIN_HEIGHT = 10;// set the height on scroll
    const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
    const scrollY = new Animated.Value(0);

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT,HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    });

    const updateSearch = (newSearch) => {
        setSearch(newSearch);
    };

    return (
        <View style={styles.view}>
            { search === '' &&
                <Animated.View style={{height: headerHeight}}>
                    <Header
                        viewStyles={styles.header}
                        textStyles={styles.headerText}
                    >Descubre nuevos libros</Header>
                </Animated.View>
            }
            <SearchBar
                placeholder="Título, autor, ISBN"
                onChangeText={(e) => updateSearch(e)}
                value={search}
                containerStyle={styles.searchBar}
                inputContainerStyle={styles.searchBarContainer}
                inputStyle={styles.searchBarInput}
                placeholderTextColor='#aaa'
                leftIconContainerStyle={styles.searchBarIcon}
                searchIcon={<Image
                    source={ require('../../../../assets/img/search.png') }
                    resizeMode="contain"
                    style={styles.searchBarIconImage}
                />}
            />
            <View
                style={styles.viewContentContainer}
            >
                { search === ''
                    ?
                    <View>
                        <SubjectsList initial='Bestsellers' />
                        <BooksList scrollY={scrollY} />
                    </View>
                    :
                    <SearchResults search={search}/>
                }
            </View>
        </View>
    )
}