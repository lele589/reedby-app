import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";

import Explore from "../screens/Explore/Index/Explore";
import BookInfo from "../screens/Explore/BookInfo/BookInfo";

const Stack = createStackNavigator();

export default function ExploreStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="explore"
                component={Explore}
                options={{ title: 'Explorar' }}
            />
            <Stack.Screen
                name="book-info"
                component={BookInfo}
            />
        </Stack.Navigator>
    )
};