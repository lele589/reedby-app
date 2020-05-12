import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BookshelfStack from '../navigations/BookshelfStack'
import ExploreStack from '../navigations/ExploreStack'
import AddBookStack from '../navigations/AddBookStack'
import AccountStack from './AccountStack'
import { Icon } from 'react-native-elements'
import { Colors } from '../styles'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="explore"
                tabBarOptions={{
                    inactiveTintColor: Colors.grey,
                    activeTintColor: Colors.green,
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >
                <Tab.Screen
                    name="bookshelf"
                    component={BookshelfStack}
                    options={{ title: "Colección" }}
                />
                <Tab.Screen
                    name="explore"
                    component={ExploreStack}
                    options={{ title: "Explorar" }}
                />
                <Tab.Screen
                    name="add-book"
                    component={AddBookStack}
                    options={{ title: "Añadir" }}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{ title: "Cuenta" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
};

const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
        case "bookshelf":
            iconName = "book-open";
            break;
        case "explore":
            iconName = "globe-alt";
            break;
        case "add-book":
            iconName = "plus";
            break;
        case "account":
            iconName = "user";
            break;
        default:
            break;
    }

    return(
        <Icon type='simple-line-icon' name={iconName} size={22} color={color} containerStyle={ styles.iconContainer } />
    )
};

const styles = StyleSheet.create({
    iconContainer: {
        marginTop: 10
    },
});