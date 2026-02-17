import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
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
      <View>
        <Image
          source={require("../../../assets/appImages/mobileImage.png")}
          style={styles.imageContainer}
          contentFit="cover"
        />
      </View>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Plantas bonitas</Text>
          <Text style={styles.headerText}>Registrate</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inputsContainer}>
            <TextInput
              value={user}
              onChangeText={setUser}
              placeholder="User name"
              style={styles.input}
            />

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              style={styles.input}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              secureTextEntry
              style={styles.input}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={
                isLoading ? styles.buttonPrimaryDisabled : styles.buttonPrimary
              }
              onPress={handleRegister}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>
                {isLoading ? "Cargando..." : "Registrarse"}
              </Text>
            </Pressable>
            {/* <Text>o</Text>
            <Pressable
              style={styles.buttonSecondary}
              onPress={() => {}}
            >
              <Text style={styles.buttonSecondaryText}>
                Iniciar con Google
              </Text>
            </Pressable> */}
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>¿Ya tienes cuenta?</Text>
            <Link href={"/(auth)/login"}>
              <Text style={styles.linkText}>Inicia sesión</Text>
            </Link>
          </View>
        </View>
      </View>
      <Toast />
    </View>
  );
};

export default Register;
