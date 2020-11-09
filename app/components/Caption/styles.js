import { Colors } from '../../styles'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    view: {
        marginBottom: 10,
        marginTop: 10
    },
    title: {
        color: Colors.greyDark,
        marginBottom: 5,
        fontSize: 15,
        lineHeight: 22,
        textTransform: 'uppercase',
        width: '100%'
    },
    description: {
        color: Colors.greyLight,
        fontSize: 16,
        lineHeight: 22,
        width: '100%'
    },
});