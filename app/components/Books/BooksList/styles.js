import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
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