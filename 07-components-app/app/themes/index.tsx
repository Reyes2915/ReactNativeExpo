import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
const ThemesScreen = () => {
  //const theme = useColorScheme();

  const { toogleTheme, currentTheme, isSystemTheme, setSystemTheme } =useThemeChangerContext();
  

  //const {colorScheme,setColorScheme}=useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    //setColorScheme(value ? 'dark' : 'light' );
    toogleTheme();

    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };
  const setSystemMode = (value: boolean) => {
    if (value) {
      setDarkModeSettings({
        darkMode: darkModeSettings.darkMode,
        systemMode: true,
      });
      setSystemTheme();
    }
  };

  return (
    <ThemedView margin>
      <ThemedCard className="mt-5">
        <ThemedSwitch
          onValueChange={setDarkMode}
          value={darkModeSettings.darkMode}
          text="Dark mode"
          className="mb-5"
        ></ThemedSwitch>
        <ThemedSwitch
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
          text="System Mode"
        ></ThemedSwitch>
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
