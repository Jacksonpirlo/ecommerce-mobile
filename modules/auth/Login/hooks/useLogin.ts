import { login } from "@/services/login";
import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

const useLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const showToast = (type: "success" | "error" | "info", text: string) => {
    Toast.show({
      type: type,
      text1: text,
    });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      showToast("error", "Todos los campos son obligatorios");
      return;
    }

    if (!validateEmail(email)) {
      showToast("error", "Por favor ingresa un email válido");
      return;
    }

    if (password.length < 5) {
      showToast("error", "La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setIsLoading(true);

    try {
      const dataLogin = await login({ email, password });

      if (dataLogin.status === 200) {
        showToast("success", "¡Inicio de sesión exitoso!");
        setTimeout(() => {
          router.replace("/explore"); // JUST TO TEST
        }, 2000);
      }
    } catch (err: any) {
      console.error("Login error:", err);

      if (err.response) {
        const status = err.response.status;

        switch (status) {
          case 401:
            showToast("error", "Correo o contraseña incorrectos");
            break;
          case 400:
            showToast("error", "Datos inválidos");
            break;
          case 404:
            showToast("error", "Usuario no encontrado");
            break;
          case 500:
            showToast("error", "Error del servidor. Intenta más tarde");
            break;
          default:
            showToast(
              "error",
              `Error: ${err.response.data?.message || "Error desconocido"}`,
            );
        }
      } else if (err.request) {
        showToast("error", "Sin conexión. Verifica tu internet");
      } else {
        showToast("error", "Error al procesar la solicitud");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleLogin,
  };
};

export default useLogin;
