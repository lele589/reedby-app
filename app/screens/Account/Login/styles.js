import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.greyDark,
    },
    title: {
        color: Colors.white,
        fontSize: 27,
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        color: Colors.white,
        fontSize: 17,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    imageView: {
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: 50,
        marginTop: 20
    },
    btnsView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    btnCommon: {
        width: '40%',
    },
    btnMain: {
        backgroundColor: Colors.green,
    },
    btnMainText: {
        color: Colors.white,
        fontSize: 18,
    },
});