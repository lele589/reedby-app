import { StyleSheet } from "react-native";
import { Colors } from "../../../styles"

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.white,
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 250,
        width: '100%'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 40,
        marginTop: 20,
        lineHeight: 23,
        paddingHorizontal: 20
    },
    btnsView: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    }
});