import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import App from "./index";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [oswaldLoaded, oswaldError] = useOswald({
      Oswald_400Regular,
    });

    const [latoLoaded, latoError] = useLato({
      Lato_400Regular,
    });

    useEffect(() => {
      if ((oswaldLoaded || oswaldError) && (latoLoaded || latoError)) {
        SplashScreen.hideAsync();
      }
    }, [oswaldLoaded, oswaldError, latoLoaded, latoError]);

    if (!oswaldLoaded && !oswaldError && !latoLoaded && !latoError) {
      return null;
    }

  return <App />;
}
