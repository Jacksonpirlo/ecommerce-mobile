import { Text, View } from "react-native";

import Dashboard from "@/modules/dashboard/Dashboard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <View style={[{ flex: 1 }]}>
        <Text>IN PROCESS</Text>
      </View>
    </SafeAreaView>
  );
}
