import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import AppLoading from 'expo-app-loading';
import Navigation from "./app/navigations/Navigation";
import useAuthentication from "./app/hooks/useAuthentication";
import firebase, { FirebaseContext } from './app/config/firebase';

import { Colors } from "./app/styles";

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
            <SafeAreaView style={styles.safeArea}>
                <Navigation/>
            </SafeAreaView>
        </FirebaseContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.green,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});
