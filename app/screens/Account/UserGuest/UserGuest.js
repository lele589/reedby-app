import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Button from "../../../components/Button/Button";

import { styles } from "./styles";

export default function UserGuest() {
    return (
        <ScrollView centerContent={true} style={ styles.scrollView }>
            <View style={styles.imageView} >
                <Image
                    source={ require("../../../../assets/img/user-guest.png") }
                    resizeMode="contain"
                    style={ styles.image }
                />
            </View>
            <Text style={styles.text}>Descubre nuevos libros basados en tus preferencias, anota tus lecturas y comparte recomendaciones.</Text>
            <View style={ styles.btnsView }>
                <Button
                    text="Acceder"
                    onPress={()=> console.log("login") }
                    type="btnSecondary"
                />
                <Button
                    text="Registrarse"
                    onPress={()=> console.log("register") }
                    type="btnMain"
                />
            </View>
        </ScrollView>
    )
};