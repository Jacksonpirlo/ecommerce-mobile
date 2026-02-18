import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import useRegister from "./hooks/useRegister";
import { styles } from "./styles";

const Register = () => {
  const {
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleRegister,
  } = useRegister();

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
            <Text style={styles.headerSubtitle}>Registrate</Text>
          </View>

          <View style={styles.inputsContainer}>
            <TextInput
              value={user}
              onChangeText={setUser}
              placeholder="User name"
              autoCapitalize="words"
              style={styles.input}
            />
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
            onPress={handleRegister}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Cargando..." : "Registrarse"}
            </Text>
          </Pressable>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>¿Ya tienes cuenta?</Text>
            <Link href="/(auth)/login">
              <Text style={styles.linkText}>Inicia sesión</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
      <Toast />
    </View>
  );
};

export default Register;
