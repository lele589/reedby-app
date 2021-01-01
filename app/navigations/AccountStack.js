import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";

import Account from "../screens/Account/Account";
import Register from "../screens/Account/Register/Register"
import Login from "../screens/Account/Login/Login";
import { Colors } from "../styles";

const Stack = createStackNavigator();

export default function AccountStack({ navigation, route}) {

    if(route.state) {
        const routes = route.state.routes;
        const currentRoute = routes[routes.length -1].name;

        switch (currentRoute) {
            case 'login':
                navigation.setOptions({ tabBarVisible: false });
                break;
            case 'register':
                navigation.setOptions({ tabBarVisible: false });
                break;
            default:
                navigation.setOptions({ tabBarVisible: true });
                break;
        }
    }

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: Colors.green},
        }}>
            <Stack.Screen
                name="account"
                component={Account}
                options={{ title: 'Cuenta' }}
            />
            <Stack.Screen
                name="register"
                component={Register}
                options={{
                    title: 'Registrarse',
                    headerTransparent: true,
                    headerTitle: false,
                    headerTintColor: Colors.white,
                }}
            />
            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    title: 'Iniciar sesión',
                    headerTransparent: true,
                    headerTitle: false,
                    headerTintColor: Colors.white,
                }}
            />
        </Stack.Navigator>
    )
};