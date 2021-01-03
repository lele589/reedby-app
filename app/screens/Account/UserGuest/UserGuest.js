import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from "../../../components/Button/Button";

import TextCustom from "../../../components/TextCustom/TextCustom";
import { styles } from "./styles";

export default function UserGuest() {

    const navigation = useNavigation();

    return (
        <ScrollView centerContent={true} style={ styles.scrollView }>
            <View style={styles.imageView} >
                <Image
                    source={ require("../../../../assets/img/user-guest.png") }
                    resizeMode="contain"
                    style={ styles.image }
                />
            </View>
            <TextCustom textStyles={styles.text}>Descubre nuevos libros basados en tus preferencias, anota tus lecturas y comparte recomendaciones.</TextCustom>
            <View style={ styles.btnsView }>
                <Button
                    text="Acceder"
                    onPress={()=> navigation.navigate("login") }
                    type="btnSecondary"
                />
                <Button
                    text="Registrarse"
                    onPress={()=> navigation.navigate("register") }
                    type="btnMain"
                />
            </View>
        </ScrollView>
    )
};