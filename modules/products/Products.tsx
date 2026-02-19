import Card from "@/components/Card";
import getProducts from "@/services/products";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

interface productProps {
  _id: string;
  name: string;
  type: string;
  image: string;
  price?: number;
  description?: string;
}

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const handleProductData = async () => {
      const res = await getProducts();
      setProducts(res.data.products);
      setFilteredProducts(res.data.products);
    };

    handleProductData();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product: productProps) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar productos..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView style={styles.scrollView}>
        {filteredProducts.map((product: productProps) => {
          return (
            <Card
              key={product._id}
              title={product.name}
              category={product.type}
              price={product.price || 250}
              description={
                product.description || "Producto de alta calidad para tu hogar."
              }
              image={{ uri: product.image }}
              buttonText="Agregar al carrito"
              onPress={() => {
                alert("Producto agregado");
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginLeft: 16,
  },
  searchBar: {
    margin: 16,
    marginBottom: 8,
    elevation: 2,
  },
  scrollView: {
    flex: 1,
  },
});

export default Products;
