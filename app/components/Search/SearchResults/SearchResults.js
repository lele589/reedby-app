import React, { useEffect, useState } from "react";
import { FlatList, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import SearchNoResults from "../SearchNoResults/SearchNoResults";
import BookPlaceholder from "../../Loaders/BookPlaceholder/BookPlaceholder";
import BookListSeparator from "../../Books/BooksList/BooklistSeparator/BooklistSeparator";
import Book from "../../Books/Book/Book";
import { styles } from './styles';
import TagColor from "../../Tags/TagColor/TagColor";

export default function SearchResults({ search }) {

    const [apiUrl, setApiUrl] = useState(null);
    const [results, setResults] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
    //const [startResult, setStartResult] = useState(0);
    const [loading, setLoading] = useState(false);
    const maxResults = 10;
    const navigation = useNavigation();

    const getApiUrl = async (query) => {
        const formatQuery =  query.replace(/ /gi, '+').toLowerCase();
        await setApiUrl(`https://www.googleapis.com/books/v1/volumes?q=${formatQuery}&fields=totalItems,items(id,volumeInfo)&langRestrict=es&maxResults=${maxResults}`);
    }

    const getResults = async (apiUrl) => {
        await fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                const resultsArray = [];
                if(data['items'] && data['items'].length > 0) {
                    data['items'].forEach(item => {
                        resultsArray.push(item);
                    });
                    setResults([...results, ...resultsArray]);
                    setTotalItems(data['totalItems']);
                    //setStartResult(startResult + maxResults);
                } else {
                    setNoResults(true);
                }
            })
            .catch((error) => {
                console.error('Error: ' + error);
            });
    };

    // const handleLoadMore = () => {
    //     if (apiUrl && apiUrl !== '') {
    //         getResults(apiUrl);
    //     }
    // };

    useEffect(() => {
        setNoResults(false);
        //setStartResult(0);
        setLoading(true);
        if (search.length > 3) {
            getApiUrl(search);
        }
    }, [search]);

    useEffect(() => {
        if (apiUrl && apiUrl !== '') {
            getResults(apiUrl);
        }
    }, [apiUrl]);


    return (
        <View style={styles.view}>
            { loading
                ?
                <View style={styles.bookPlaceholder}>
                    <BookPlaceholder
                        repeat={3}
                        lineOneWidth={70}
                        lineTwoWidth={50}
                        lineThreeWidth={30}
                    />
                </View>
                :
                ( noResults
                    ?
                        <SearchNoResults />
                    :
                        <View>
                            <View style={styles.resultsNum}>
                                <TagColor text={totalItems + ' Resultados'} active overflow />
                            </View>
                            <FlatList
                                data={results}
                                renderItem={({ item }) => <Book book={item} bookStyles={styles.book} navigation={navigation}/>}
                                keyExtractor={(item, index) => index.toString()}
                                //onEndReached={handleLoadMore}
                                //onEndReachedThreshold={0.5} // Esto indica a partir de cuando se va a ejecutar nuestra función (contando desde abajo (por ejemplo, antes de llegar al footer)
                            />
                        </View>
                )
            }
        </View>
    )
};