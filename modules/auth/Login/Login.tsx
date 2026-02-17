import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import useLogin from "./hooks/useLogin";

const Login = () => {
  const { email, setEmail, password, setPassword, isLoading, handleLogin } =
    useLogin();
  return (
    <View style={[{ flex: 1 }]}>
      <View>
        <Image
          source={require("../../../assets/appImages/mobileImage.png")}
          style={{ width: "100%", height: 200 }}
        />
      </View>
      <View>
        <View
          style={[
            {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
              padding: 10,
              gap: 20,
            },
          ]}
        >
          <Text style={[{ color: "#008236", fontWeight: "600", fontSize: 25 }]}>
            Plantas bonitas
          </Text>
          <Text style={[{ color: "#008236", fontWeight: "600", fontSize: 25 }]}>
            Iniciar sesión
          </Text>
        </View>
        <View
          style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}
        >
          <View style={[{ gap: 20, width: "70%" }]}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              style={[
                {
                  borderColor: "#111",
                  borderWidth: 1,
                  padding: 8,
                  borderRadius: 5,
                },
              ]}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              secureTextEntry
              style={[
                {
                  borderColor: "#111",
                  borderWidth: 1,
                  padding: 8,
                  borderRadius: 5,
                },
              ]}
            />
          </View>
          <View
            style={[
              {
                gap: 20,
                marginVertical: 30,
                alignItems: "center",
                width: "100%",
              },
            ]}
          >
            <Pressable
              style={[
                {
                  backgroundColor: isLoading ? "#ccc" : "#008236",
                  padding: 10,
                  borderRadius: 5,
                  width: "70%",
                  opacity: isLoading ? 0.6 : 1,
                },
              ]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text style={[{ textAlign: "center", color: "#fff" }]}>
                {isLoading ? "Cargando..." : "Iniciar Sesión"}
              </Text>
            </Pressable>
            {/* <Text>o</Text>
            <Pressable
              style={[
                {
                  borderColor: "#008236",
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 5,
                  width: "70%",
                },
              ]}
              onPress={() => {}}
            >
              <Text style={[{ textAlign: "center", color: "#008236" }]}>
                Iniciar con Google
              </Text>
            </Pressable> */}
          </View>
          <View style={[{ flex: 1, flexDirection: "row", gap: 3 }]}>
            <Text style={[{ color: "#008236" }]}>¿No tienes cuenta?</Text>
            <Link href={"/explore"}>
              <Text style={[{ color: "#008236" }]}>Regístrate</Text>
            </Link>
          </View>
        </View>
      </View>
      <Toast />
    </View>
  );
};

export default Login;
