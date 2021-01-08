import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    subject: {
        marginVertical: 20,
        marginLeft: 10,
        marginRight: 5,
        alignItems: 'center',
        backgroundColor: Colors.brown,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignSelf: 'flex-start',
    },
    subjectActive: {
        backgroundColor: Colors.yellow,
    },
    subjectText: {
        color: Colors.black,
        fontSize: 13,
    },
    overflow: {
        borderRadius: 15,
        paddingVertical: 10,
        //ios
        shadowColor: Colors.greyDark,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        //android
        elevation: 9,
    },
    overflowText: {
        color: Colors.white,
        fontSize: 14,
    }
});