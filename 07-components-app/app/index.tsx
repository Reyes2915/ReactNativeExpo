import {
    animationMenuRoutes,
    menuRoutes,
    uiMenuRoutes,
} from "@/constants/Routes";
import MenuItem from "@/presentation/menu/MenuItem";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";
import { View } from "react-native";

const ComponentsApp = () => {
  return (
    <ThemedView>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        ></MenuItem>
      ))}
      <View className="my-5"></View>
      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index === 0}
          isLast={index === uiMenuRoutes.length - 1}
        ></MenuItem>
      ))}
      <View className="my-5"></View>

      {menuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index === 0}
          isLast={index === menuRoutes.length - 1}
        ></MenuItem>
      ))}
    </ThemedView>
  );
};

export default ComponentsApp;
