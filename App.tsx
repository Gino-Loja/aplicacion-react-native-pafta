import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Otra from "./src/ui/home";
import { useColorScheme } from "react-native";

import { TamaguiProvider, Theme, createTamagui, createTokens } from "tamagui";

import config from "./tamagui.config";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import Prediccion from "./src/ui/prediccion";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <TamaguiProvider config={config}>
        <Theme name={colorScheme === "light" ? "light_pink" : "dark_pink"}>
          <SafeAreaView style={styles.container}>
            {/* <Otra /> */}

            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="prediccion"
                  component={Prediccion}
                ></Stack.Screen>
                <Stack.Screen name="home" component={Otra}></Stack.Screen>
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </Theme>
      </TamaguiProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
