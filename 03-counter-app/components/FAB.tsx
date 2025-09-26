import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

interface Props {
  label: string;

  position?: "left" | "rigth";
  //Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = "rigth",
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,

        position === "rigth" ? styles.positionRight : styles.positionLeft,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ fontSize: 20, color: "white" }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#655558F",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },

  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
