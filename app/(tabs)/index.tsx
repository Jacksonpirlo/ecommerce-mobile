import { View } from "react-native";

import Dashboard from "@/modules/dashboard/Dashboard";

export default function HomeScreen() {
  return (
    <View style={[{ flex: 1, backgroundColor: "#ffffff" }]}>
      <Dashboard />
    </View>
  );
}
