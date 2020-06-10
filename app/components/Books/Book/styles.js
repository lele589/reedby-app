import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },
    bookImageView: {
        backgroundColor: 'white',
        width: '25%',
        borderRadius: 5,
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
        height: 140,
    },
    image: {
        height: '100%',
        borderRadius: 5,
    },
    bookInfoView: {
        width: '75%',
        paddingLeft: 15
    },
    title: {
        marginTop: 10,
        fontSize: 18,
        lineHeight: 22,
    },
    author: {
        color: Colors.grey,
        fontSize: 15,
        lineHeight: 22,
    },
    ratingView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    rating: {
        marginRight: 5
    },
    ratingText: {
        color: Colors.green,
        marginRight: 5,
        fontSize: 15
    },
    ratingTextCount: {
        color: Colors.greyLight
    },
    tagView: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    tag: {
        alignSelf: 'flex-start',
        width: 'auto',
    }
});