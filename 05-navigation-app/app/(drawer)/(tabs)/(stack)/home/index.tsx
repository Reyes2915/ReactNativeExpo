import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          color="secondary"
          className="mb-2"
          onPress={() => router.push("/profile")}
        >
          Perfil
        </CustomButton>
        <CustomButton
          color="tertiary"
          className="mb-2"
          onPress={() => router.push("/settings")}
        >
          Ajustes
        </CustomButton>
        <Link href="/products" asChild>
          <CustomButton variant="text-only" color="primary">
            Productos
          </CustomButton>
        </Link>
        <CustomButton
        onPress={onToggleDrawer}
        >Abrir Menú</CustomButton>
        {/* <Link className="mb-5" href="/products/index">
          Productos
        </Link>
        <Link className="mb-5" href="/profile/index">
          Perfil
        </Link>
        <Link className="mb-5" href="/settings/index">
          Ajustes
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
