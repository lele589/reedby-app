import React from 'react';
import { AppLoading } from 'expo';
import Navigation from "./app/navigations/Navigation";
import useAuthentication from "./app/hooks/useAuthentication";
import firebase, { FirebaseContext } from './app/config/firebase';

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

  const user = useAuthentication();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <FirebaseContext.Provider
            value={{
              firebase,
              user
            }}
        >
          <Navigation/>
        </FirebaseContext.Provider>
    );
  }
}
