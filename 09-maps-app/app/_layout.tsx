import { useColorScheme } from "@/presentation/hooks/use-color-scheme.web";
import PermissionsCheckerProvider from "@/presentation/providers/PermissionsCheckerProvider";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <PermissionsCheckerProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="loading/index"
              options={{ animation: "none" }}
            ></Stack.Screen>
            <Stack.Screen
              name="map/index"
              options={{ animation: "fade" }}
            ></Stack.Screen>
            <Stack.Screen
              name="permissions/index"
              options={{ animation: "fade" }}
            ></Stack.Screen>
          </Stack>
        </PermissionsCheckerProvider>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
