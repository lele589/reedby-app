import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    formView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        color: Colors.white
    },
    iconLeft: {
        color: 'rgba(255, 255, 255, .4)',
        marginRight: 10
    },
    iconRight: {
        color: Colors.green,
    },
    placeholder: {
        color: Colors.greyLight2
    },
    error: {
        color: Colors.yellow,
    }
});