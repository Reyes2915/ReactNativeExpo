import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";



const isIOS=Platform.OS==='ios';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  return (
    <KeyboardAvoidingView
    behavior={
      isIOS ? 'height' :undefined
    }
    >
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            ></ThemedTextInput>

            <ThemedTextInput
              placeholder="Correo Electrónico"
              keyboardType="email-address"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, email: text })}
            ></ThemedTextInput>
            <ThemedTextInput
              placeholder="Teléfono"
              keyboardType="phone-pad"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            ></ThemedTextInput>
          </ThemedCard>

          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
