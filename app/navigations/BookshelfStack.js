import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";
import Bookshelf from "../screens/Bookshelf";

const Stack = createStackNavigator();

export default function BookshelfStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="bookshelf"
                component={Bookshelf}
                options={{ title: 'Colección' }}
            />
        </Stack.Navigator>
    )
};