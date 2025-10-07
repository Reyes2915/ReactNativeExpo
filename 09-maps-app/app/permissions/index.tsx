import ThemedPressable from "@/presentation/components/shared/ThemedPressable";
import { usePermissionsStore } from "@/presentation/store/usePermissions";
import React from "react";
import { Text, View } from "react-native";

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionsStore();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar ubicación
      </ThemedPressable>
      <Text>Estado actual: {locationStatus}</Text>
    </View>
  );
};

export default PermissionsScreen;
