import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    view: {
        backgroundColor: Colors.white,
        height: '100%',
    },
    bookInfoView: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 180
    },
    loaderView: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    loaderText: {
        fontSize: 20,
        marginTop: 10,
        color: Colors.green
    }
});