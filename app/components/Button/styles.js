import { Colors } from '../../styles'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    btnCommon: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 25,
        height: 45
    },
    btnMain: {
        backgroundColor: Colors.yellow,
    },
    btnSecondary: {
        borderColor: Colors.green,
        borderWidth: 1,
    },
    btnMainText: {
        color: Colors.white,
        fontSize: 18,
    },
    btnSecondaryText: {
        color: Colors.green,
        fontSize: 18,
    },
    iconCommon: {
        paddingRight: 10
    },
    btnMainIcon: {
        color: Colors.white
    },
    btnSecondaryIcon: {
        color: Colors.green
    }
});