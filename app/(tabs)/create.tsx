import TextInputComponent from "@/components/TextInput";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateProducts = () => {
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  useEffect(() => {
    console.log(productName);
  }, [productName]);
  return (
    <SafeAreaView>
      <View>
        <Text>Crear nuevo producto</Text>
        <View>
          <TextInputComponent
            onChange={(e: any) => {
              setProductName(e.target.value);
            }}
            value={productName}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateProducts;
