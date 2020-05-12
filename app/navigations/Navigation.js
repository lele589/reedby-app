import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BookshelfStack from '../navigations/BookshelfStack'
import ExploreStack from '../navigations/ExploreStack'
import AddBookStack from '../navigations/AddBookStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
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