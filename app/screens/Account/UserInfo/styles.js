import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    view: {
        minHeight: 130,
        paddingLeft: 20,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.greyDark,
    },
    avatarContainer: {
        marginRight: 20,
        backgroundColor: Colors.green
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.white,
        marginBottom: 5
    },
    bookshelf: {
        fontSize: 15,
        color: Colors.greyLight,
    }
});