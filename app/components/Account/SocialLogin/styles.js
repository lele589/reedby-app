import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    text: {
        color: Colors.white,
        fontSize: 17,
        marginTop: 40,
        marginBottom: 20,
        textAlign: 'center'
    },
    btnsView: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnCommon: {
        width: '40%',
        height: 48
    },
});