import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Otra from "./src/ui/home";
import { useColorScheme } from "react-native";

import { TamaguiProvider, Theme, createTamagui, createTokens } from "tamagui";

import config from "./tamagui.config";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import Prediccion from "./src/ui/prediccion";

export default function App() {
  const colorScheme = useColorScheme();
  // const tokens = createTokens({
  //   color: {
  //     black: "#000",

  //     white: "#fff",
  //   },
  //   space: {
  //     // ... definiciones de espacio
  //   },
  //   size: {
  //     // ... definiciones de tamaño
  //   },
  //   radius: {
  //     // ... definiciones de radio
  //   },
  //   zIndex: {
  //     // ... definiciones de zIndex
  //   },
  // });

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) return null;

  return (
    <>
      <StatusBar style="auto" />
      <TamaguiProvider config={config}>
        <Theme name={colorScheme === "light" ? "light_green" : "dark_green"}>
          <SafeAreaView style={styles.container}>
            {/* <Otra /> */}
            <Prediccion></Prediccion>
          </SafeAreaView>
        </Theme>
      </TamaguiProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
  },
});
