import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import Book from "../../../components/Books/Book/Book";
import BookListSeparator from "../../../components/Books/BooksList/BooklistSeparator/BooklistSeparator";
import BookDetails from "../../../components/Books/BookDetails/BookDetails";
import TextCustom from "../../../components/TextCustom/TextCustom";
import { styles } from "./styles";
import { Colors } from "../../../styles";

export default function BookInfo({ navigation, route }) {

    const { id, name, subjects } = route.params;
    const[bookData, setBookData] = useState(null);

    navigation.setOptions({ title: name});
    const apiUrl = `https://www.googleapis.com/books/v1/volumes/${id}`;

    const getBookInfo = async () => {
        const data = await fetch(apiUrl);
        const book = await data.json();
        setBookData(book);
    };

    useEffect(() => {
        getBookInfo();
    }, []);

    return (
        <View style={styles.view}>
            { bookData
                ?
                <View style={styles.bookInfoView}>
                    <Book book={bookData}/>
                    <BookListSeparator />
                    <BookDetails book={bookData} subjectsList={subjects} />
                </View>
                :
                <View style={styles.loaderView}>
                    <ActivityIndicator size="large" color={Colors.green}/>
                    <TextCustom textStyles={styles.loaderText}>Cargando...</TextCustom>
                </View>
            }
        </View>
    )
}