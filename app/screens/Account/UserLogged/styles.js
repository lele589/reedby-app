import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

export const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 20
    },
    menuContainer: {
        backgroundColor: Colors.white,
        height: '100%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingTop: 40,
        zIndex: -1,
        paddingHorizontal: 10
    }
});