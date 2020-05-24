import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

export const styles = StyleSheet.create({
    overlayStyles: {
        width: '90%',
        borderRadius: 5,
    },
    overlayErrorStyles: {
        width: '90%',
        padding: 0,
        borderRadius: 5,
    },
    backdropStyle: {
        backgroundColor: 'rgba(0, 0, 0, .5)'
    },
    errorIconContainer: {
        backgroundColor: Colors.red,
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 10,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        alignItems: 'stretch',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    errorIcon: {
        width: 30,
        height: 30,
        marginRight: 15
    },
    errorMessageContainer: {
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 10
    },
    errorTitle: {
        fontSize: 23,
        textAlign: 'center',
        marginBottom: 10,
        color: Colors.white
    },
    errorText: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.greyDark,
    }
});