import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Bookshelf from '../screens/Bookshelf'
import Explore from '../screens/Explore'
import AddBook from '../screens/AddBook'
import Settings from '../screens/Settings'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="bookshelf"
                    component={Bookshelf}
                    options={{ title: "Colección" }}
                />
                <Tab.Screen
                    name="explore"
                    component={Explore}
                    options={{ title: "Explorar" }}
                />
                <Tab.Screen
                    name="add-book"
                    component={AddBook}
                    options={{ title: "Añadir" }}
                />
                <Tab.Screen
                    name="settings"
                    component={Settings}
                    options={{ title: "Ajustes" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
};