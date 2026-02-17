import Register from "@/modules/auth/Register/Register";
import { View } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Register />
    </View>
  );
}