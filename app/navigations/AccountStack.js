import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import Register from "../screens/Account/Register/Register"
import Login from "../screens/Account/Login/Login";

const Stack = createStackNavigator();

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="account"
                component={Account}
                options={{ title: 'Cuenta' }}
            />
            <Stack.Screen
                name="register"
                component={Register}
                options={{ title: 'Registrarse' }}

            />
            <Stack.Screen
                name="login"
                component={Login}
                options={{ title: 'Iniciar sesión' }}

            />
        </Stack.Navigator>
    )
};