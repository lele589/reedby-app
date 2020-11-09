import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Book from "../Book/Book";
import Header from "../../Header/Header";
import BookListSeparator from "./BooklistSeparator/BooklistSeparator";
import { styles } from "./styles";
import { Colors } from "../../../styles";

export default function BooksList() {
    //const [totalBooks, setTotalBooks] = useState(0);
    //const [startBook, setStartBook] = useState(null);
    // books+${actualSearch}&maxResults=${maxResults}&orderBy=${orderBy}&langRestrict=es
    const [booksList, setBooksList] = useState([]);

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=la+historia+interminable`;

    const getBooks = async () => {
       const data = await fetch(apiUrl);
       const books = await data.json();
        setBooksList(books['items']);
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
                    renderItem={({ item }) => <Book book={item} navigation={navigation}/>}
                    keyExtractor={item => item.id}
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