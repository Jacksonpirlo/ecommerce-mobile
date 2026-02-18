import { useAuthStore } from "@/stores/authStorage";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Logout() {
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoutButton: {
    backgroundColor: "#dc2626",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutText: {
    color: "white",
    fontWeight: "600",
  },
});
