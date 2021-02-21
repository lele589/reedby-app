import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    view: {
        minHeight: 130,
        paddingLeft: 20,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    avatarContainer: {
        marginRight: 15,
        position: 'relative',
        top: 20,
        borderWidth: 5,
        borderRadius: 40,
        borderColor: Colors.yellow,
        backgroundColor: Colors.greenLight,
        //ios
        shadowColor: Colors.greyDark,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5,
        //android
        elevation: 15,
    },
    avatar: {
        borderRadius: 35
    },
    name: {
        fontSize: 23,
        fontWeight: '600',
        color: Colors.white,
        marginBottom: 5
    },
    bookshelf: {
        fontSize: 16,
        color: Colors.greyLight2,
    }
});