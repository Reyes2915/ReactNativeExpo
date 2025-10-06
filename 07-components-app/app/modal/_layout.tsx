import { Stack } from "expo-router";
import React from "react";

const ModalLayout = () => {
  return (
    <Stack
    screenOptions={{
        headerShown:false,
    }}
    >
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen
        name="modal-window"
        options={{
          presentation: "modal",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="modal-window-2"
        options={{
          presentation: "modal",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default ModalLayout;
