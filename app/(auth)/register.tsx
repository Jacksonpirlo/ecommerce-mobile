import Register from "@/modules/auth/Register/Register";
import { useAuthStore } from "@/stores/authStorage";
import { Redirect } from "expo-router";
import { View } from "react-native";

export default function RegisterScreen() {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Redirect href="/(tabs)/explore" />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Register />
    </View>
  );
}
