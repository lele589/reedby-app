import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    tag: {
        borderWidth: 1,
        borderColor: Colors.greyLight2,
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginRight: 5,
        marginTop: 5
    },
    tagText: {
        fontSize: 12,
        color: Colors.greyLight
    }
});