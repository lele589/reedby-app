import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";

import Bookshelf from "../screens/Bookshelf";
import { Colors } from "../styles";

const Stack = createStackNavigator();

export default function BookshelfStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: Colors.green},
        }}>
            <Stack.Screen
                name="bookshelf"
                component={Bookshelf}
                options={{ title: 'Colección' }}
            />
        </Stack.Navigator>
    )
};