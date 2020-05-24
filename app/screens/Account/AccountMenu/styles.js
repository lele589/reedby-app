import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    view: {
        marginBottom: 20
    },
    mainTitle: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 20,
        backgroundColor: Colors.white,
        color: Colors.green,
        fontWeight: '600',
        fontSize: 17
    },
    subtitle: {
        color: Colors.grey
    }
});