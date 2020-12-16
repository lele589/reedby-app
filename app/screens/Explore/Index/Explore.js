import React, { useState } from 'react';
import { View } from 'react-native';
import { SearchBar } from "react-native-elements";

import SubjectsList from "../../../components/Subjects/SubjectsList/SubjectsList";
import BooksList from "../../../components/Books/BooksList/BooksList";
import SearchResults from "../../../components/Search/SearchResults/SearchResults";
import { styles } from "./styles";

export default function Explore() {

    const [search, setSearch] = useState('');

    const updateSearch = (newSearch) => {
        setSearch(newSearch);
    };

    return (
        <View style={styles.view}>
            <SearchBar
                placeholder="Título, autor, ISBN"
                onChangeText={(e) => updateSearch(e)}
                value={search}
                containerStyle={styles.searchBar}
                inputContainerStyle={styles.searchBarContainer}
                inputStyle={styles.searchBarInput}
                placeholderTextColor='#aaa'
            />
            { search === ''
                ?
                <View>
                    <SubjectsList />
                    <BooksList />
                </View>
                :
                <SearchResults search={search}/>
            }
        </View>
    )
}