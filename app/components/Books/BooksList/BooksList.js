import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import Book from "../Book/Book";
import Header from "../../Header/Header";
import BookListSeparator from "./BooklistSeparator/BooklistSeparator";
import { styles } from "./styles";
import { Colors } from "../../../styles";

export default function BooksList() {
    // books+${actualSearch}&maxResults=${maxResults}&orderBy=${orderBy}&langRestrict=es
    const[booksList, setBooksList] = useState([]);
    const[loading, setLoading] = useState(false);
    const[startBook, setStartBook] = useState(0);
    const maxResults = 5;

    const navigation = useNavigation();
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=la+novia+gitana&fields=totalItems,items(id,volumeInfo)&langRestrict=es&maxResults=${maxResults}&startIndex=${startBook}`;

    const getBooks = async () => {
       const data = await fetch(apiUrl);
       const books = await data.json();
       //TODO: mejorar el componente loadMore footer
       //TODO: IF response == 0 significa que ha traido 0 nuevos, asi que no ejecutar el foreach, meter todo en un if
       const booksArray = [];
       books['items'].forEach(item => {
           booksArray.push(item);
       });
       setBooksList([...booksList, ...booksArray]);
       setStartBook(startBook + maxResults);
       setLoading(false);
    };

    const handleLoadMore = () => {
        setLoading(true);
        getBooks();
    };

    useFocusEffect(
        useCallback(() => {
            getBooks();
        }, [])
    );

    return (
        <View style={styles.view}>
            <Header>Bestsellers</Header>
            { booksList.length > 0
                ?
                <FlatList
                    data={booksList}
                    renderItem={({ item }) => <Book book={item} navigation={navigation}/>}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={BookListSeparator}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.5} // Esto indica a partir de cuando se va a ejecutar nuestra función (contando desde abajo (por ejemplo, antes de llegar al footer)
                    ListFooterComponent={
                        loading && (
                            <ActivityIndicator
                                color="00a680"
                            />
                        )
                    }
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