import React, { useContext, useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { FirebaseContext } from "../../../config/firebase";

import Header from "../../Header/Header";
import Subject from "../Subject/Subject"

export default function SubjectsList() {

    const [subjectsList, setSubjectsList] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    const getSubjects = async () => {
        firebase.getDbSubjects(true)
            .then(dbSubjects => {
                setSubjectsList(dbSubjects);
            });
    };

    useEffect(() => {
        getSubjects();
    }, []);

    return (
        <View>
            <Header moreLink={true}>Categorías</Header>
            {subjectsList.length > 0
                ?
                <FlatList
                    data={subjectsList}
                    renderItem={({ item }) => <Subject item={item}/>}
                    horizontal
                    keyExtractor={item => item.id}
                />
                :
                <View><Text>Cargando...</Text></View>
            }
        </View>
    )
};