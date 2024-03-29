import React, { useState, useEffect, useContext } from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import { FirebaseContext } from "../../../config/firebase";
//TODO: mejorar performance con pure? recarga la vista al volver
//import { pure } from 'recompose';

import TextCustom from "../../TextCustom/TextCustom";
import Tag from "../../Tags/Tag/Tag";
import { styles } from './styles';
import { Colors } from "../../../styles";

export default function Book({ book, navigation, visibleTags, bookStyles }) {

    const { id } = book;
    const { title, authors, categories, imageLinks, ratingsCount, averageRating } = book['volumeInfo'];
    const subjects = categories;
    const defaultThumb = 'https://firebasestorage.googleapis.com/v0/b/reedby-app.appspot.com/o/default%2Fbook-cover-light-gray-1.png?alt=media&token=81d2100f-ddde-4112-99f1-63209555ab5d';
    const thumb = imageLinks ? imageLinks['smallThumbnail'] : defaultThumb;

    const[subjectsList, setSubjectsList]= useState(subjects);
    const[finalSubjectList, setFinalSubjectList]= useState([]);

    const { firebase } = useContext(FirebaseContext);

    const goBookInfo = async () => {
        navigation.navigate("book-info", {
            id,
            thumb: thumb,
            bookData: book['volumeInfo'],
            subjects: finalSubjectList,
        });
    };

    useEffect(() => {
        if(subjects) {
            setSubjectsList(subjects);
            firebase.getDbSubjects(false)
                .then(dbSubjects => {
                    getFinalSubjects(dbSubjects);
                });
        }
    }, []);

    const getFinalSubjects = (dbSubjects) => {
        const result = [];
        subjectsList.forEach((subjectItem, key) => {
            if(findSubject(dbSubjects, subjectItem)) {
                dbSubjects.find(o => {
                    if(o.name === subjectItem) {
                        result.push(o.translation);
                    }
                });
            }
        });
        setFinalSubjectList(result);
    };

    const findSubject = (arr, searchKey) => {
        return arr.find(o => o.name === searchKey);
    };

    return (
        <TouchableOpacity
            onPress={goBookInfo}
        >
            <View style={[styles.view, bookStyles]}>
                <View style={styles.bookImageView}>
                    <Image
                        source={{ uri: thumb }}
                        resizeMode="cover"
                        style={styles.image}
                    />
                </View>
                <View style={styles.bookInfoView}>
                    {title &&
                        <TextCustom
                            weight="bold"
                            numberOfLines={1}
                            textStyles={styles.title}>
                                {title}
                        </TextCustom>
                    }
                    {authors &&
                        <TextCustom
                            numberOfLines={1}
                            textStyles={styles.author}>
                                {authors.toString()}
                        </TextCustom>
                    }
                    {ratingsCount &&
                        <View style={styles.ratingView}>
                            <Rating
                                readonly
                                imageSize={20}
                                fractions={1}
                                startingValue={averageRating}
                                type='custom'
                                tintColor={Colors.white}
                                ratingColor={Colors.yellow}
                                ratingBackgroundColor={Colors.yellowLight}
                                style={styles.rating} />
                            <TextCustom weight="bold" textStyles={styles.ratingText}>{averageRating}</TextCustom>
                            <TextCustom textStyles={styles.ratingTextCount}>({ratingsCount})</TextCustom>
                        </View>
                    }
                    {visibleTags && finalSubjectList.length > 0 &&
                    <View style={styles.tagView}>
                        {finalSubjectList.map((subjectItem, key) =>
                            key < 4 &&
                            (<Tag
                                key={key}
                                tagStyles={styles.tag}
                                tagTitle={subjectItem}
                                numberOfLines={1}
                            />)
                        )}
                    </View>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
} ;

//TODO: mejorar performance con pure? recarga la vista al volver
//export default pure(Book);