import Login from "@/modules/auth/Login/Login";
import { View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Login />
    </View>
  );
}
