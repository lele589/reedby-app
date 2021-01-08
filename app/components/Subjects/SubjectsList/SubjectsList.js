import React, { useContext, useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { FirebaseContext } from "../../../config/firebase";

import TagColor from "../../Tags/TagColor/TagColor";
import { styles } from "./styles";

export default function SubjectsList({ initial }) {

    const [subjectsList, setSubjectsList] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    const getSubjects = async () => {
        firebase.getDbSubjects(true, true)
            .then(dbSubjects => {
                setSubjectsList(dbSubjects);
            });
    };

    useEffect(() => {
        getSubjects();
    }, []);

    return (
        <View style={styles.view}>
            {subjectsList.length > 0
                &&
                <FlatList
                    data={subjectsList}
                    renderItem={({ item }) => <TagColor active={initial === item.name && true} item={item} overflow/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
            }
        </View>
    )
};