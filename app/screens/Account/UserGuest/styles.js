import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
        marginLeft: 30,
        marginRight: 30,
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 250,
        width: '100%'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 40,
        marginTop: 20,
        lineHeight: 23
    },
    btnCommon: {
        width: '85%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 25,
        height: 45
    },
    btnsView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    }
});