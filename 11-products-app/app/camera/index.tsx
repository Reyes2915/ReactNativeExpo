import { useThemeColor } from "@/hooks/use-theme-color";
import { useCameraStore } from "@/presentation/store/useCameraStore";
import { Ionicons } from "@expo/vector-icons";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from "expo-media-library";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

export default function CameraScreen() {
const {addSelectedImage}=useCameraStore();

  const [facing, setFacing] = useState<CameraType>("back");
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediapermission, requestMediaPermission] =
    MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState<string>();
  const cameraRef = useRef<CameraView>(null);

  const onRequestPermissions = async () => {
    try {
      const { status: cameraPermissionStatus } =
        await requestCameraPermission();
      if (cameraPermissionStatus !== "granted") {
        Alert.alert(
          "Lo siento",
          "Necesitamos permiso a la cámara para tomar fotos"
        );
        return;
      }

      const { status: mediaPermissionStatus } = await requestMediaPermission();
      if (mediaPermissionStatus !== "granted") {
        Alert.alert(
          "Lo siento",
          "Necesitamos permiso a la galería para guardar las imágenes"
        );
        return;
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Algo salio mal con los permisos");
    }
  };
  if (!cameraPermission) {
    // Camera cameraPermissions are still loading.
    return <View />;
  }

  const onShutterButtonPress = async () => {
    if (!cameraRef.current) return;
    const picture = await cameraRef.current.takePictureAsync({
      quality: 0.7,
    });
    if (!picture.uri) return;
    console.log(picture);

    setSelectedImage(picture.uri);
  };

  if (!cameraPermission.granted) {
    // Camera cameraPermissions are not granted yet.
    return (
      <View
        style={{
          ...styles.container,
          marginHorizontal: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.message}>
          Necesitamos permiso para usar la camara y la galería
        </Text>
        <Button onPress={onRequestPermissions} title="Solicitar Permiso" />
      </View>
    );
  }

  const onReturnCancel = () => {
    router.dismiss();
  };
  const onPictureAccepted = async () => {
    if (!selectedImage) return;
    await MediaLibrary.createAssetAsync(selectedImage);

    addSelectedImage(selectedImage);
    router.dismiss();
  };

  const onRetakePhoto = () => {
    setSelectedImage(undefined);
  };

const onPickImages=async()=>{
  const result=await ImagePicker.launchImageLibraryAsync({
    mediaTypes:ImagePicker.MediaTypeOptions.Images,
    quality:0.5,
    aspect:[4,3],
    //allowsEditing:true,
    allowsMultipleSelection:true,
    selectionLimit:5
  });

  if(result.canceled) return;

  result.assets.forEach(asset=>{
    addSelectedImage(asset.uri);
  });

  router.dismiss();
}



  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  if (selectedImage) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage }} style={styles.camera}></Image>
        <ConfirmImageButton onPress={onPictureAccepted}></ConfirmImageButton>
        <RetakeImageButton onPress={onRetakePhoto}></RetakeImageButton>
        <ReturnCancelButton onPress={onReturnCancel}></ReturnCancelButton>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing} />
      <ShutterButton onPress={onShutterButtonPress}></ShutterButton>
      <FlipCameraButton onPress={toggleCameraFacing}></FlipCameraButton>
      <GalleryButton onPress={onPickImages}></GalleryButton>
      <ReturnCancelButton onPress={onReturnCancel}></ReturnCancelButton>
      {/* <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity> */}
    </View>
  );
}

const ShutterButton = ({ onPress = () => {} }) => {
  const dimensions = useWindowDimensions();
  const primaryColor = useThemeColor({}, "primary");

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.shutterButton,
        {
          position: "absolute",
          bottom: 30,
          left: dimensions.width / 2 - 32,
          borderColor: primaryColor,
        },
      ]}
    ></TouchableOpacity>
  );
};

const FlipCameraButton = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.flipCameraButton}>
      <Ionicons
        name="camera-reverse-outline"
        size={30}
        color="white"
      ></Ionicons>
    </TouchableOpacity>
  );
};
const GalleryButton = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.galleryButton}>
      <Ionicons name="images-outline" size={30} color="white"></Ionicons>
    </TouchableOpacity>
  );
};
const ReturnCancelButton = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.returnCancelButton}>
      <Ionicons name="arrow-back-outline" size={30} color="white"></Ionicons>
    </TouchableOpacity>
  );
};

const ConfirmImageButton = ({ onPress = () => {} }) => {
  const dimensions = useWindowDimensions();
  const primaryColor = useThemeColor({}, "primary");

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.shutterButton,
        {
          position: "absolute",
          bottom: 30,
          left: dimensions.width / 2 - 32,
          borderColor: primaryColor,
        },
      ]}
    >
      <Ionicons
        name="checkmark-outline"
        size={30}
        color={primaryColor}
      ></Ionicons>
    </TouchableOpacity>
  );
};

const RetakeImageButton = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.flipCameraButton}>
      <Ionicons name="close-outline" size={30} color="white"></Ionicons>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },

  shutterButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "white",
    //borderColor: 'red',
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  flipCameraButton: {
    width: 50,
    height: 50,
    borderRadius: 32,
    backgroundColor: "#17202A",
    position: "absolute",
    bottom: 40,
    right: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  galleryButton: {
    width: 50,
    height: 50,
    borderRadius: 32,
    backgroundColor: "#17202A",
    position: "absolute",
    bottom: 40,
    left: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  returnCancelButton: {
    width: 50,
    height: 50,
    borderRadius: 32,
    backgroundColor: "#17202A",
    position: "absolute",
    top: 40,
    left: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
