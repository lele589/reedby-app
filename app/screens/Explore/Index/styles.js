import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    view: {
        height: '100%',
    },
    viewContentContainer: {
        backgroundColor: Colors.white,
        borderRadius: 35,
        marginTop: 40,
        height: '100%',
    },
    header: {
        paddingLeft: 20,
        paddingTop: 40,
    },
    headerText: {
        color: Colors.white,
    },
    searchBar: {
        backgroundColor: Colors.white,
        padding: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 15,
        marginVertical: 20,
        marginHorizontal: 15,
    },
    searchBarContainer: {
        backgroundColor: Colors.greySoft,
        borderRadius: 25,
    },
    searchBarInput: {
        backgroundColor: Colors.greySoft,
        fontSize: 15,
    },
    searchBarIcon: {
        backgroundColor: Colors.yellow,
        width: 35,
        height: 35,
        borderRadius: 15,
    },
    searchBarIconImage: {
        width: 20,
        height: 20,
        marginLeft: 5
    }
});