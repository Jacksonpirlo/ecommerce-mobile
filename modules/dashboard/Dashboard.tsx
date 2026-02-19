import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";

const Dashboard = () => {
  return (
    <ImageBackground
      source={require("@/assets/appImages/backgroundDashboardMobile.jpg")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido a plantas bonitas</Text>
        <Text style={styles.subtitle}>Pay plants, don't be toche</Text>
      </View>
    </ImageBackground>
  );
};

export default Dashboard;

