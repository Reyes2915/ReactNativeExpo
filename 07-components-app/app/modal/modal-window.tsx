import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";

const ModalScreen = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
      bgColor="#A52182"
    >
      <ThemedText>Hola,soy un modal</ThemedText>

      <ThemedButton
        className="my-4"
        onPress={() => router.push("/modal/modal-window-2")}
      >
        Otro Modal
      </ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"}></StatusBar>
    </ThemedView>
  );
};

export default ModalScreen;
