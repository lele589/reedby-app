import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Book from "../Book/Book";
import Header from "../../Header/Header";
import BookListSeparator from "./BooklistSeparator/BooklistSeparator";
import { apiKeyGoogle } from "../../../config/apis";
import { styles } from "./styles";
import { Colors } from "../../../styles";
import axios from "axios";

export default function BooksList() {
    //[books, setBooks] = useState([]);
    //const [searchList, setSearch] = useState(search);
    //search.map(book => console.log('libro: ', book.title));
    //console.log(search.length);

    //const [totalBooks, setTotalBooks] = useState(0);
    //const [startBook, setStartBook] = useState(null);
    // books+${actualSearch}&maxResults=${maxResults}&orderBy=${orderBy}&langRestrict=es
    const [booksList, setBooksList] = useState([]);

    const apiUrl = `http://openlibrary.org/search.json?title=la+historia+interminable`;

    const getBooks = async () => {
       const data = await fetch(apiUrl);
       const books = await data.json();
        setBooksList(books['docs']);
    };

    useEffect(() => {
        getBooks();
    }, []);


    return (
        <View>
            <Header>Bestsellers</Header>
            { booksList.length > 0
                ?
                <FlatList
                    data={booksList}
                    renderItem={({ item }) => item['isbn'] && <Book book={item}/>}
                    keyExtractor={item => item.key}
                    removeClippedSubviews={true}
                    ItemSeparatorComponent={BookListSeparator}
                    onEndReachedThreshold={0.5} // Esto indica a partir de cuando se va a ejecutar nuestra función (contando desde abajo (por ejemplo, antes de llegar al footer)
                />
             :
                <View style={styles.loaderView}>
                    <ActivityIndicator size="large" color={Colors.green}/>
                    <Text style={styles.loaderText}>Cargando...</Text>
                </View>
            }
        </View>
    )
};