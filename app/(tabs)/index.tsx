import { StyleSheet, View } from "react-native";

import Login from "@/modules/auth/Login/Login";

export default function HomeScreen() {
  return (
    <View style={[{ flex: 1, backgroundColor: "#ffffff" }]}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
