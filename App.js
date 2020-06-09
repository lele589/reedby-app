import React from 'react';
import { AppLoading } from 'expo';
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/firebase";

import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
} from '@expo-google-fonts/jost';

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <Navigation/>
    );
  }
}
