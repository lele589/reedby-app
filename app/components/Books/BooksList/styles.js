import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    view: {
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        overflow: 'hidden',
        borderRadius: 35
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