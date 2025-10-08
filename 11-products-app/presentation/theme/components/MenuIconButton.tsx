import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

interface Props {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
}

const MenuIconButton = ({ onPress, icon }: Props) => {
  const primaryColor = useThemeColor({}, "primary");

  return (
    <TouchableOpacity
    onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={primaryColor}></Ionicons>
    </TouchableOpacity>
  );
};

export default MenuIconButton;
