import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

export const styles = StyleSheet.create({
    tag: {
        borderWidth: 1,
        borderColor: Colors.greyLight2,
        borderRadius: 5,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 5,
        paddingRight: 5,
        marginRight: 5,
        marginTop: 5
    },
    tagText: {
        fontSize: 13,
        color: Colors.greyLight
    }
});