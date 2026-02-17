import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import useLogin from "./hooks/useLogin";
import { styles } from "./styles";

const Login = () => {
  const { email, setEmail, password, setPassword, isLoading, handleLogin } =
    useLogin();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require("../../../assets/appImages/mobileImage.png")}
          style={styles.imageContainer}
          contentFit="cover"
        />

        <View style={styles.contentWrapper}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Plantas bonitas</Text>
            <Text style={styles.headerSubtitle}>Iniciar sesión</Text>
          </View>

          <View style={styles.inputsContainer}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              secureTextEntry
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <Pressable
            style={[
              styles.button,
              isLoading ? styles.buttonDisabled : styles.buttonEnabled,
            ]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Cargando..." : "Iniciar Sesión"}
            </Text>
          </Pressable>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>¿No tienes cuenta?</Text>
            <Link href="/(auth)/register">
              <Text style={styles.linkText}>Regístrate</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
      <Toast />
    </View>
  );
};

export default Login;
