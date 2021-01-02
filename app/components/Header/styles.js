import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

export const styles = StyleSheet.create({
    view: {
        paddingTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        fontSize: 25,
        alignSelf: 'flex-start'
    },
    moreTextView: {
        alignSelf: 'flex-start'
    },
    moreText: {
        color: Colors.green,
        fontSize: 15,
        marginTop: 5
    }
});