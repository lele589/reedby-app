import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";

import AddBook from "../screens/AddBook";
import { Colors } from "../styles";

const Stack = createStackNavigator();

export default function AddBookStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: Colors.green},
        }}>
            <Stack.Screen
                name="add-book"
                component={AddBook}
                options={{ title: 'Añadir' }}
            />
        </Stack.Navigator>
    )
};