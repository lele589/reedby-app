import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";
import Explore from "../screens/Explore/Explore";

const Stack = createStackNavigator();

export default function ExploreStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="explore"
                component={Explore}
                options={{ title: 'Explorar' }}
            />
        </Stack.Navigator>
    )
};