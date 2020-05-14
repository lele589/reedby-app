import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

export const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: Colors.white,
        borderRadius: 10
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.green,
        marginTop: 10
    }
});