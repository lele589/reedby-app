import React, { useState, useEffect, useContext } from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { FirebaseContext } from "../../../config/firebase";

import { getBookCover } from "../../../utils/books";
import TextCustom from "../../TextCustom/TextCustom";
import Tag from "../../Tag/Tag";
import { styles } from './styles';

export default function Book({ book, navigation }) {

    const { title, author_name, isbn, subject } = book;
    const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/reedby-app.appspot.com/o/default%2Fbook-cover-light-gray-1.png?alt=media&token=81d2100f-ddde-4112-99f1-63209555ab5d';

    const[imageUrl, setImageUrl]= useState(defaultImage);
    const[subjectsList, setSubjectsList]= useState(subject);
    const[finalSubjectList, setFinalSubjectList]= useState([]);

    const { firebase } = useContext(FirebaseContext);

    const goBookInfo = async () => {
        navigation.navigate("book-info", {
            isbn: isbn,
            name: title
        });
    };

    useEffect(() => {
        getBookCover(setImageUrl, isbn[0]);
        if(subject) {
            setSubjectsList(subject);
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
            <View style={styles.view}>
                <View style={styles.bookImageView}>
                    <Image
                        source={{ uri: imageUrl }}
                        resizeMode="cover"
                        style={styles.image}
                    />
                </View>
                <View style={styles.bookInfoView}>
                    {title &&
                        <TextCustom
                            weight="bold"
                            numberOfLines={2}
                            textStyles={styles.title}>
                                {title}
                        </TextCustom>
                    }
                    {author_name &&
                        <TextCustom
                            numberOfLines={1}
                            textStyles={styles.author}>
                                {author_name.toString()}
                        </TextCustom>
                    }
                    {finalSubjectList.length > 0 &&
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