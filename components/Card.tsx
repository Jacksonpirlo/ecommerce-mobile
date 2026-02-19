import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CardProps {
  title: string;
  category: string;
  price: number;
  description: string;
  image: any;
  buttonText?: string;
  onPress: () => void;
}

const Card = ({
  title,
  category,
  price,
  description,
  image,
  buttonText = "Agregar al carrito",
  onPress,
}: CardProps) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    margin: 16,
    maxWidth: 340,
  },
  image: {
    width: "100%",
    height: 280,
    backgroundColor: "#1a3a30",
  },
  content: {
    padding: 20,
  },
  category: {
    fontSize: 12,
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00D95F",
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00D95F",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Card;
