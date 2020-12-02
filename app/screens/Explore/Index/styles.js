import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    view: {
        backgroundColor: Colors.white,
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20
    },
    searchBar: {
        backgroundColor: Colors.white,
        padding: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderTopColor: Colors.white,
        borderBottomColor: Colors.white,
        borderRadius: 25,
        marginTop: 10
    },
    searchBarContainer: {
        backgroundColor: Colors.greySoft,
        borderRadius: 25,
    },
    searchBarInput: {
        backgroundColor: Colors.greySoft,
    }
});