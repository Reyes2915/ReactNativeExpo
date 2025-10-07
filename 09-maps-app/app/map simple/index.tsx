import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
const MapsApp = () => {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 45.41256,
          longitude: -75.698931,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      ></MapView>


      <Marker
      coordinate={{latitude: 45.41256, longitude: -75.698931}}
      title="Aqui estoy"
      description="Esta es mi casa"
      ></Marker>

      <Marker
      coordinate={{latitude: 45.434005, longitude: -75.67708}}
      title="Un parque"
      description="Un paque cerca de mi casa"
      ></Marker>
    </View>
  );
};

export default MapsApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
