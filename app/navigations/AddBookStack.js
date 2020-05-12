import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";
import AddBook from "../screens/AddBook";

const Stack = createStackNavigator();

export default function AddBookStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="add-book"
                component={AddBook}
                options={{ title: 'Añadir' }}
            />
        </Stack.Navigator>
    )
};