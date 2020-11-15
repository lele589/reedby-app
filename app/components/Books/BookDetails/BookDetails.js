import React from "react";
import { ScrollView, View } from 'react-native';
import { replace } from "lodash";

import Caption from "../../Caption/Caption";
import Tag from "../../Tag/Tag";
import { styles } from './styles';

export default function BookDetails({ book, subjectsList }) {

    const { authors, language, description, publishedDate, publisher, pageCount } = book['volumeInfo'];
    const synopsis = replace(description, new RegExp("<[^>]*>", "g"), ""); // Delete html tags

    return (
        <ScrollView style={styles.scrollView}>
            {authors && <Caption title='Autores' description={authors} />}
            {language && <Caption title='Idioma' description={language} />}
            {synopsis.length > 0 && <Caption title='Sinopsis' description={synopsis} />}
            {subjectsList.length > 0 && <Caption title='Categorías'/>}
            {subjectsList.length > 0 &&
            <View style={styles.tagView}>
                {subjectsList.map((subjectItem, key) =>
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
            {pageCount && <Caption title='Número de páginas' description={pageCount} />}
            {publishedDate && <Caption title='Publicación' description={[publishedDate, ', ', publisher]} />}
        </ScrollView>
    )
} ;