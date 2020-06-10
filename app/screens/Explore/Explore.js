import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import BookCategories from "../../components/Books/BookCategories/BookCategories";
import BooksList from "../../components/Books/BooksList/BooksList";
import { styles } from "./styles";

export default function Explore() {

    const [search, setSearch] = useState([]);
    const [query, setQuery] = useState(`harry&maxResults=5&langRestrict=es`);
    const [totalBooks, setTotalBooks] = useState(0);
    const [startBook, setStartBook] = useState(null);
    // search+${actualSearch}&maxResults=${maxResults}&orderBy=${orderBy}&langRestrict=es


    const apiKey = 'AIzaSyAmANIwWO0CWNsDeWTbZuH9cGn9SC_p09E';
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?key=${apiKey}&q=${query}`;

    const fetchBooks = () => {
        const resultBooks = [];
        return fetch(apiUrl, {method:"GET"})
        .then(response => response.json())
        .then(jsonResponse => {
            const books = jsonResponse['items'];
            setStartBook(books.length - 1); // Sacar el último book para empezar por ese a listarlos
            books.forEach((item) => {
                const book = item;
                book.id = item.id;
                resultBooks.push(book);
            });
            setSearch(resultBooks);
        })
        .catch((err) => {
            console.log(err);
        });

        // Otro ejemplo de como hacer la promesa con un try/catch
        // try {
        //     const fetchResponse = await fetch(apiUrl, {method:"GET"});
        //     jsonResponse = await fetchResponse.json();
        // } catch (error) {
        //     console.log(error);
        // }

        // const books = jsonResponse['items'];
        // setStartBook(books.length - 1); // Sacar el último book para empezar por ese a listarlos
        // books.forEach((item) => {
        //     const book = item;
        //     book.id = item.id;
        //     resultBooks.push(book);
        // });
        
        // setSearch(resultBooks);
    };

    useFocusEffect(
        useCallback(() => {
            fetchBooks();
        }, [],)
    );

    function generateQuery(stringSearch, maxResults, langRestrict, orderBy) {
        const initialQuery = {
            stringSearch: stringSearch ? stringSearch : '',
            maxResults: maxResults ? maxResults : 10,
            langRestrict: langRestrict ? langRestrict : 'es',
            orderBy: orderBy ? orderBy : '',
        };
        return initialQuery;
    }

    return (
        <View style={styles.view}>
            { search && <BookCategories search={search}/> }
            { search && <BooksList search={search}/> }
        </View>
    )
}