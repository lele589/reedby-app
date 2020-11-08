import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    subjectView: {
        margin: 10,
        alignItems: 'center'
    },
    subjectAvatar: {
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
    subjectText: {
        marginTop: 5,
        color: Colors.grey
    }
});