import { View } from "react-native";

import Products from "@/modules/products/Products";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <View style={[{ flex: 1 }]}>
        <Products />
      </View>
    </SafeAreaView>
  );
}
