import "react-native-reanimated";


import { allRoutes } from "@/constants/Routes";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ThemeChangerProvider } from "@/presentation/context/ThemeChangerContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";
export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }}
    >
      {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
      <ThemeChangerProvider>
        {/* <ThemedView margin>
          <ThemedText className="mt-20" numberOfLines={2}>
            Hola Mundo
          </ThemedText>
        </ThemedView> */}

        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor,
            },
            headerStyle: {
              backgroundColor,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "",
            }}
          ></Stack.Screen>
          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
                headerShown: !route.title.includes("Slides"),
              }}
            ></Stack.Screen>
          ))}
        </Stack>
        {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" /> */}
        {/* </ThemeProvider> */}
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
