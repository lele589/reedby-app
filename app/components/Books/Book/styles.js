import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 130,
    },
    bookImageView: {
        width: '25%',
        paddingLeft: 10,
        borderRadius: 15,
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
    image: {
        borderRadius: 5,
        height: '100%',
    },
    bookInfoView: {
        width: '75%',
        paddingLeft: 15
    },
    title: {
        fontSize: 17,
        lineHeight: 20,
    },
    author: {
        color: Colors.grey,
        fontSize: 14,
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
        color: Colors.grey,
        marginRight: 5,
        fontSize: 13
    },
    ratingTextCount: {
        color: Colors.greyLight
    },
    tagView: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        alignSelf: 'flex-start',
        width: 'auto',
    }
});